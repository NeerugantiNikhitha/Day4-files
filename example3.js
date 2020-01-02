function greeting(person) {
    return "Welcome to TypeScript: " + person;
}
//let user= true;
var user = { first_name: "Krishna", last_name: "sai" };
//user.first_name="Krishna";
//user.last_name="sai";
document.getElementById("result").innerHTML = greeting(user);
