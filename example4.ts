interface Person{
    first_name:string;
    last_name:string;
}
class Student implements Person{
   first_name:string;
   last_name:string;
   constructor(fname:string,lname:string){
        this.first_name=fname;
        this.last_name=lname;
   }
   greeting():string{
    return "Welcome to TypeScript: "+this.first_name+" "+this.last_name;
   }
}
let student1= new Student("parth","samthan");
document.getElementById("result").innerHTML=student1.greeting();





