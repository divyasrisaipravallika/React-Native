var size;
var v;
function Create_grid() {
  size = parseInt(window.prompt("Enter the size of grid"));
  var body = document.getElementsByTagName("body")[0];
  var table = document.createElement("table");
  body.appendChild(table);
  table.setAttribute("id", "table");
  var r_index = 1;
  for (var i = 0; i < size; i++) {
    var c_index = 1;
    var table_row = document.createElement("tr");
    for (var j = 0; j < size; j++) {
      var table_data = document.createElement("td");
      table_data.setAttribute("id", r_index + " " + c_index);
      table_row.appendChild(table_data);
      c_index++;
    }
    r_index++;
    table.appendChild(table_row);
  }
  var image = document.createElement("img");
  image.setAttribute("src", "./pict/fish2-removebg-preview.png");
  var ts_img = document.getElementById("1 1");
  ts_img.appendChild(image);
  image.setAttribute("id", "1 1");
  var div = document.createElement("div");
  body.appendChild(div);
  var left = document.createElement("button");
  left.setAttribute("id", left);
  left.setAttribute("onclick", "leftMove()");
  div.appendChild(left);
  left.innerHTML = "left";
  var right = document.createElement("button");
  right.setAttribute("id", right);
  right.setAttribute("onclick", "rightMove()");
  div.appendChild(right);
  right.innerHTML = "right";
  var top = document.createElement("button");
  top.setAttribute("id", top);
  top.setAttribute("onclick", "topMove()");
  div.appendChild(top);
  top.innerHTML = "top";
  var bottom = document.createElement("button");
  bottom.setAttribute("id", bottom);
  bottom.setAttribute("onclick", "bottomMove()");
  div.appendChild(bottom);
  bottom.innerHTML = "bottom";
  var body = document.getElementsByTagName("body")[0];
  var button = document.getElementById("button");
  body.removeChild(button);
  var x = Math.trunc(Math.random() * size + 1);
  var y = Math.trunc(Math.random() * size + 1);
  v = x + " " + y;
  var d = document.createElement("div");
  d.setAttribute("id", "div");
  d.style.backgroundImage = "url('./pict/fish-food.jpg')";
  var t = document.getElementById(v);
  t.appendChild(d);
}

function leftMove() {
  var image = document.getElementsByTagName("img")[0];
  var id = image.getAttribute("id");
  var [r_id, c_id] = id.split(" ");
  if (c_id == 1) {
    alert("Enter the corret value");
    return;
  }
  var d = parseInt(c_id);
  d--;
  var ts_remove = document.getElementById(id);
  ts_remove.removeChild(image);
  var ts_img = document.getElementById(r_id + " " + d);
  ts_img.appendChild(image);
  image.setAttribute("id", r_id + " " + d);
}

function rightMove() {
  var image = document.getElementsByTagName("img")[0];
  var id = image.getAttribute("id");
  var [r_id, c_id] = id.split(" ");
  if (c_id == size) {
    alert("Enter the corret value");
    return;
  }
  var d = parseInt(c_id);
  d++;
  var ts_remove = document.getElementById(id);
  ts_remove.removeChild(image);
  var ts_img = document.getElementById(r_id + " " + d);
  ts_img.appendChild(image);
  image.setAttribute("id", r_id + " " + d);
}

function topMove() {
  var image = document.getElementsByTagName("img")[0];
  var id = image.getAttribute("id");
  var [r_id, c_id] = id.split(" ");
  if (r_id == 1) {
    alert("Enter the corret value");
    return;
  }
  var d = parseInt(r_id);
  d--;
  var ts_remove = document.getElementById(id);
  ts_remove.removeChild(image);
  var ts_img = document.getElementById(d + " " + c_id);
  ts_img.appendChild(image);
  image.setAttribute("id", d + " " + c_id);
}

function bottomMove() {
  var image = document.getElementsByTagName("img")[0];
  var id = image.getAttribute("id");
  var [r_id, c_id] = id.split(" ");
  if (r_id == size) {
    alert("Enter the corret value");
    return;
  }
  var d = parseInt(r_id);
  d++;
  var ts_remove = document.getElementById(id);
  ts_remove.removeChild(image);
  var ts_img = document.getElementById(d + " " + c_id);
  var d = document.getElementById("div");
  if (v === d + " " + c_id) {
    console.log(ts_img);
    ts_img.removeChild(d);
    ts_img.appendChild(image);
  } else {
    ts_img.appendChild(image);
  }
  image.setAttribute("id", d + " " + c_id);
}
