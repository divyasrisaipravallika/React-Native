var hc = NaN;
var sc = 60;
var mc = 60;
var address;
var stop = false;
var dummy = NaN;
function funs(event) {
  var x = parseInt(event.target.getAttribute("value"));
  if (x === 5) {
    hc = parseInt(window.prompt("Enter number of hours"));
  } else {
    hc = x;
  }
  var seconds = (document.getElementsByClassName("seconds")[0].innerHTML = 60);
  var minutes = (document.getElementsByClassName("minutes")[0].innerHTML = 60);
  var hours = (document.getElementsByClassName("hours")[0].innerHTML = hc);
  dummy = hc;
  mc = 60;
  sc = 60;
}
function fun() {
  if (isNaN(hc)) {
    clearInterval(address);
    return;
  }
  if (stop) {
    clearInterval(address);
    return;
  }
  sc--;
  var seconds = document.getElementsByClassName("seconds")[0];
  var minutes = (document.getElementsByClassName("minutes")[0].innerHTML = mc);
  var minutes = (document.getElementsByClassName("hours")[0].innerHTML = hc);
  seconds.innerHTML = sc;
  if (sc <= 0) {
    sc = 60;
    mc--;
    var minutes = document.getElementsByClassName("minutes")[0];
    minutes.innerHTML = mc;
  }
  if (mc < 0) {
    mc = 59;
    hc--;
    var hours = document.getElementsByClassName("hours")[0];
    hours.innerHTML = hc;
  }
  if (hc < 0 && mc < 0) {
    clearInterval(address);
  }
}
function start() {
  address = setInterval(fun, 1000);
  stop = false;
}
function fun2() {
  stop = true;
}
function reset() {
  if (isNaN(hc)) {
    clearInterval(address);
    return;
  }
  var seconds = (document.getElementsByClassName("seconds")[0].innerHTML =
    "00");
  var minutes = (document.getElementsByClassName("minutes")[0].innerHTML =
    "00");
  var hours = (document.getElementsByClassName("hours")[0].innerHTML = "00");
  stop = true;
  sc = 60;
  mc = 60;
  hc = dummy;
}
