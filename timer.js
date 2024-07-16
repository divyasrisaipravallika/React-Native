var stop = false;
var sc = 0;
var hc = 0;
var mc = 0;
var s;
function fun1() {
  if (stop) {
    clearInterval(s);
    return;
  }
  sc++;
  var seconds = (document.getElementsByClassName("seconds")[0].innerHTML = sc);
  if (sc === 60) {
    sc = 0;
    mc++;
    var minutes = (document.getElementsByClassName("minutes")[0].innerHTML =
      mc);
  }
  if (mc === 60) {
    mc = 0;
    hc++;
    var hours = (document.getElementsByClassName("hours")[0].innerHTML = hc);
  }
}
function start() {
  s = setInterval(fun1, 1000);
  stop = false;
}
function fun2() {
  stop = true;
}
function reset() {
  sc = 0;
  hc = 0;
  mc = 0;
  var seconds = (document.getElementsByClassName("seconds")[0].innerHTML =
    "00");
  var minutes = (document.getElementsByClassName("minutes")[0].innerHTML =
    "00");
  var hours = (document.getElementsByClassName("hours")[0].innerHTML = "00");
  stop = true;
}
