var info = ["Name", "Roll Number", "Branch", "CGPA", "Action"];
var studentdata = [
  {
    name: "Divya",
    roll: "22A91A4466",
    branch: "DS",
    cgpa: 8.98,
  },
  {
    name: "Shalini",
    roll: "23MH1A05L4",
    branch: "CSE",
    cgpa: 9.05,
  },
];
var count = 0;
function fun() {
  count++;
  var div = document.getElementsByTagName("div")[0];
  div.innerHTML = "ADD DETAILS";
  if (count == 1) {
    var table = document.createElement("table");
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(table);
    var tr = document.createElement("tr");
    tr.setAttribute("class", "head");
    table.appendChild(tr);
    for (var i = 0; i <= 4; i++) {
      var td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = info[i];
    }
    for (var i = 0; i < studentdata.length; i++) {
      var tr = document.createElement("tr");
      table.appendChild(tr);
      for (var j = 0; j <= 4; j++) {
        var td = document.createElement("td");
        tr.appendChild(td);
        var input = document.createElement("input");
        if (j == 0) {
          input.setAttribute("value", studentdata[i].name);
          input.setAttribute("name", i + "-name");
        }
        if (j == 1) {
          input.setAttribute("value", studentdata[i].roll);
          input.setAttribute("name", i + "-roll");
        }
        if (j == 2) {
          input.setAttribute("value", studentdata[i].branch);
          input.setAttribute("name", i + "-branch");
        }
        if (j == 3) {
          input.setAttribute("value", studentdata[i].cgpa);
          input.setAttribute("name", i + "-cgpa");
        }
        if (j != 4) {
          input.setAttribute("onchange", "edit(event)");
          td.appendChild(input);
        }
      }
      var button = document.createElement("button");
      button.innerHTML = "DELETE";
      button.setAttribute("onclick", "del(event)");
      button.setAttribute("name", i);
      td.append(button);
    }
  } else {
    var data = {
      name: "",
      roll: "",
      branch: "",
      cgpa: "",
    };
    var table = document.getElementsByTagName("table")[0];
    var i = studentdata.length;
    data.name = window.prompt("Enter the Name");
    data.roll = window.prompt("Enter the Rollnumber");
    data.branch = window.prompt("Enter the Branch");
    data.cgpa = window.prompt("Enter the Cgpa");
    studentdata.push(data);
    var tr = document.createElement("tr");
    table.appendChild(tr);
    for (var j = 0; j <= 4; j++) {
      var td = document.createElement("td");
      tr.appendChild(td);
      var input = document.createElement("input");
      if (j == 0) {
        input.setAttribute("value", studentdata[i].name);
        input.setAttribute("name", i + "-name");
      }
      if (j == 1) {
        input.setAttribute("value", studentdata[i].roll);
        input.setAttribute("name", i + "-roll");
      }
      if (j == 2) {
        input.setAttribute("value", studentdata[i].branch);
        input.setAttribute("name", i + "-branch");
      }
      if (j == 3) {
        input.setAttribute("value", studentdata[i].cgpa);
        input.setAttribute("name", i + "-cgpa");
      }
      if (j != 4) {
        input.setAttribute("onchange", "edit(event)");
        td.appendChild(input);
      }
    }
    var button = document.createElement("button");
    button.innerHTML = "DELETE";
    button.setAttribute("onclick", "del(event)");
    button.setAttribute("name", i);
    td.append(button);
  }
}

function edit(event) {
  var x = parseInt(event.target.name[0]);
  if (event.target.name[2] === "n") {
    studentdata[x].name = event.target.value;
  } else if (event.target.name[2] === "r") {
    studentdata[x].roll = event.target.value;
  } else if (event.target.name[2] === "c") {
    studentdata[x].cgpa = event.target.value;
  } else if (event.target.name[2] === "b") {
    studentdata[x].branch = event.target.value;
  }
  // console.log(studentdata);
}

function del(event) {
  var index = parseInt(event.target.name);
  studentdata.splice(index, 1);
  var table = document.getElementsByTagName("table")[0];
  var tr = document.getElementsByTagName("tr")[index + 1];
  table.removeChild(tr);
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("name", i);
  }
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    var name = inputs[i].getAttribute("name");
    var parts = name.split("-");
    inputs[i].setAttribute("name", i + "-" + parts[1]);
  }
  console.log(studentdata);
}
