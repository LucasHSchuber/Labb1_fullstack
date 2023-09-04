"user strict";
//class
var Student = /** @class */ (function () {
    function Student(person) {
        this.fullname = person.fname + " " + person.lname;
        this.email = person.email;
    }
    //method
    Student.prototype.showname = function () {
        return this.fullname;
    };
    //method
    Student.prototype.showemail = function () {
        return this.email;
    };
    return Student;
}());
var person1 = {
    fname: "Lucas",
    lname: "H. Schuber",
    email: "lucas.hammarstrand@hotmail.com"
};
var student = new Student(person1); //instans
//print name to html
var nameEl = document.getElementById("name");
var myname = student.showname();
nameEl.innerHTML = myname;
//print email to html
var emailEl = document.getElementById("email");
var myemail = student.showemail();
emailEl.innerHTML = myemail;
//array tool
var tool = [
    {
        name: "GULP",
        founder: "Eric Schoffstall",
        release: 2013
    },
    {
        name: "SASS",
        founder: "Natalie Weizenbaum",
        release: 2022
    },
    {
        name: "NODEJS",
        founder: "Ryan Dahl",
        release: 2009
    }
];
// array tool list
var toolName = tool.map(function (tools) { return tools.name; });
var toolEl = document.getElementById("list");
var Tool = toolName;
Tool.forEach(function (item) {
    toolEl.innerHTML += "<option>".concat(item, "</option>");
});
// array list2
var List2 = ["Frilansare", "Programmerar", "Student", "Webdesigner", "Annat"];
//print occupation to select at testapp.html
var list2El = document.getElementById("list2");
var List = List2;
List.forEach(function (item) {
    list2El.innerHTML += "<option>".concat(item, "</option>");
});
//print title ENUM
var Title;
(function (Title) {
    Title["START"] = "Start";
    Title["ES"] = "Ecmascript";
    Title["TS"] = "Typescript";
})(Title || (Title = {}));
;
var TStitle = Title.TS;
var EStitle = Title.ES;
var Title2El = document.getElementById("title2");
Title2El.innerHTML = TStitle;
