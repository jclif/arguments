_ = require("./underscore")

var sum = function() {
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  args.forEach(function(num) {
    total += num
  })

  return total
}

Function.prototype.myBind = function(obj){
  var args = Array.prototype.slice.call(arguments);
  args = args.slice(1);

  var f = this
  return function() {
    f.apply(obj, args)
  }
};

obj = {
  name: "Earl Watts"
};

//
// function greet(msg) {
//   console.log(msg + ": " + this.name);
// }
//
// var myBoundFunction = greet.myBind(obj, "hello")
//
// // // equivalent to `obj.myFunction(1, 2, 3)`
// // myBoundFunction(3);
//
// myBoundFunction();

// `times` is the same:
function times(num, fun) {
  for (var i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  }
}

var cat = {
  age: 5,

  age_one_year: function () {
    this.age += 1;
  }
};

// Function argument is different:
// times(10, function () {
//   cat.age_one_year();
// });

// times(10, cat.age_one_year.myBind(cat));
//
// console.log(cat.age)

var curriedSum = function(numArgs) {
  var numbers = [];

  var _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var total = 0;
      numbers.forEach(function(num) {
        total += num;
      })
      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

// console.log(add(5)(30)(20)(1));

Function.prototype.curry = function(numArgs) {
  var args = [];
  that = this

  var _curry = function(arg) {
    args.push(arg);

    if (args.length == numArgs) {
      that.apply(that, args)
    } else {
      return _curry
    }
  }

  return _curry;
}

var test = function() {
  var args = Array.prototype.slice.call(arguments);

  console.log("testing stuff:" + args)
}

var something = test.curry(4)
something(4)(5)(6)(7)









