interface Person{
    first_name:string;
    last_name:string;
}

function  greeting(person:Person){
    return "Welcome to TypeScript: "+person.first_name+" "+person.last_name;
}

//let user= true;
let user:Person={first_name: "Krishna", last_name: "sai"};
//user.first_name="Krishna";
//user.last_name="sai";

document.getElementById("result").innerHTML=greeting(user);
