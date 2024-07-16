var a = {
  firstname: "",
  lastname: "",
  age: 0,
  gender: "",
  skills: [],
  phoneno: 0,
  birth: 0,
  email: "",
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
  a.phoneno = event.target.value;
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
