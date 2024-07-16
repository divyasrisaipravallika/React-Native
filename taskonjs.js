// var marks = parseInt(window.prompt("Enter the marks"));
// if (marks > 90 && marks <= 100) console.log("Grade is A");
// else if (marks > 80 && marks <= 90) console.log("Grade is B");
// else if (marks > 70 && marks <= 80) console.log("Grade is C");
// else if (marks > 60 && marks <= 70) console.log("Grade is D");
// else console.log("Better luck next time");

// var a = parseInt(window.prompt("Enter the first side"));
// var b = parseInt(window.prompt("Enter the second side"));
// var c = parseInt(window.prompt("Enter the third side"));
// var s = (a + b + c) / 2;
// console.log(
//   "Perimter of triangle is " + Math.sqrt(s * (s - a) * (s - b) * (s - c))
// );

// var a = parseInt(window.prompt("Enter the x square coefficient"));
// var b = parseInt(window.prompt("Enter the x coefficient"));
// var c = parseInt(window.prompt("Enter the constant"));
// console.log((b * -1 + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
// console.log((b * -1 - Math.sqrt(b * b - 4 * a * c)) / (2 * a));

const generator = () => {
  var u = "abcdefghijklmopqrstuvwxyz";
  var l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var n = "0123456789";
  var it = [u, l, n];
  var password = "";
  for (var i = 0; i < 10; i++) {
    var x = it[Math.trunc(Math.random() * it.length)];
    password += x[Math.trunc(Math.random() * x.length + 1)];
  }
  return password;
};
console.log(generator());
