var Student = (function () {
    function Student(fname, lname) {
        this.first_name = fname;
        this.last_name = lname;
    }
    Student.prototype.greeting = function () {
        return "Welcome to TypeScript: " + this.first_name + " " + this.last_name;
    };
    return Student;
}());
var student1 = new Student("parth", "samthan");
document.getElementById("result").innerHTML = student1.greeting();

