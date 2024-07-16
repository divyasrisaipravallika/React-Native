var a = {
  firstname: "",
  lastname: "",
  fathername: "",
  mothername: "",
  address: "",
  age: 0,
  gender: "",
  skills: [],
  phoneno: 0,
  birth: 0,
  email: "",
  ssc: {
    nameofinstitution: "",
    percentage: "",
    yearofpassing: "",
  },
  inter: {
    nameofinstitution: "",
    percentage: "",
    yearofpassing: "",
  },
  eng: {
    nameofinstitution: "",
    percentage: "",
    yearofpassing: "",
  },
  hobbies: "",
  pic: "",
  badges: "",
  description: "",
};
function firstname(event) {
  a.firstname = event.target.value;
}
function lastname(event) {
  a.lastname = event.target.value;
}
function age(event) {
  a.age = event.target.value;
}
function gender(event) {
  a.gender = event.target.value;
}
function skills(event) {
  a.skills.push(event.target.value);
}
function phoneno(event) {
  a.phoneno = parseInt(event.target.value);
}
function birth(event) {
  a.birth = event.target.value;
}
function email(event) {
  a.email = event.target.value;
}
function fun(event) {
  event.preventDefault();
  console.log(a);
}
function fathername(event) {
  a.fathername = event.target.value;
}
function mothername(event) {
  a.mohername = event.target.value;
}
function address(event) {
  a.address = event.target.value;
}
function ssc(event) {
  if (event.target.name === "s1") a.ssc.nameofinstitution = event.target.value;
  if (event.target.name === "s2") a.ssc.yearofpassing = event.target.value;
  if (event.target.name === "s3") a.ssc.percentage = event.target.value;
}
function inter(event) {
  if (event.target.name === "i1")
    a.inter.nameofinstitution = event.target.value;
  if (event.target.name === "i2") a.inter.yearofpassing = event.target.value;
  if (event.target.name === "i3") a.inter.percentage = event.target.value;
}
function eng(event) {
  if (event.target.name === "e1") a.eng.nameofinstitution = event.target.value;
  if (event.target.name === "e2") a.eng.yearofpassing = event.target.value;
  if (event.target.name === "e3") a.eng.percentage = event.target.value;
}
function hobbies(event) {
  a.hobbies = event.target.value;
}
function pic(event) {
  a.pic = event.target.value;
}
function badges(event) {
  a.badges = event.target.value;
}
function description(event) {
  a.description = event.target.value;
}
