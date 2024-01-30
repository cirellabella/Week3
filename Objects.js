//opbject literals
//objects are a collection of properties
//and a collection of key value pairs
//and a collection of name value pairs
let student1 = {
    //here is where i make my properties
    firstName: "Justin",
    lastName: "Ellis",
    studentID: 123456,
    grades: [90, 80, 70, 60, 50],
    calculateAvgGrade: function(){
        //calc the avg grade for the student by adding 
        //all the grades and dividing by the num of grades
        let total = 0;
        //if you're in a function and need to access one 
        //of the other props in the obj, use the this keyword
        console.log(this);
        this.grades.forEach((grade) => {
            total += grade;
        });
        return total / this.grades.length;
    }
};

console.log(student1);
console.log(student1.firstName);
console.log(student1.lastName);
console.log(student1.studentID);
console.log(student1.grades);
console.log(student1.calculateAvgGrade);
//i can get individual props from the obj using dot
//notation. king of like C#

//use `
console.log(`The student's name is ${student1.firstName} ${student1.lastName}`);
//i can also get indiv props from the obj using bracket notation
console.log(student1["firstName"]);
console.log(student1["lastName"]);
console.log(`Student ID: ${student1[studentID]}`);
console.log(student1["grades"]);
console.log(student1["grades"][0]);
console.log(student1["grades"][1]);
console.log(student1["grades"][2]);
console.log(student1["grades"][3]);
console.log(student1["grades"][4]);
console.log(student1.calculateAvgGrade());

//constructor function- used to create objects
//we make a function that returns student

function Student(firstName, lastName, studentID, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentID = studentID;
    this.grades = grades;
    this.calculateAvgGrade = function(){
        let total = 0;
        this.grades.forEach((grade)=> {
            total+= grade;
        });
        return total/ this.grades.length;
    }
}

//if i want to create a new student,  i can use a keyword
let student2 = new Student("Josh", "Ellis", 123564, [80, 70, 100]);
console.log(student2);
console.log(`The student's name if ${student2.firstName} ${student2.lastName}`);

//we can also add props to an obj after it has been created
student2.email = "josh@gmail.com";
console.log(student2);

//we can also loop thru the props of obj with a for loop
//for in loop
for(const key in student2){
    console.log(`The key is ${key} and the value if ${student2[key]}`);
}

//using a map-- can't use this keyword
//maps are another type of obj in js
//they are similar to obj literals, but some diffs
//maps are coll of key value pairs
//you may hear maps and objs used interchangeably 
//but they are not the same
//mps have a size prop
//maps can use an obj as a key

let student3 = new Map();
//i add to the map using the set method
student3.set("firstName", "Justin");
student3.set("lastName", "Bieber");
student3.set("studentID", 3456789);
student3.set("grades", [100, 100, 100, 100, 100]);
student3.set("calculateAvgGrade", () => {
    let total = 0;
    //to get the grades from the array we need to use get method
    student3.get("grades").forEach((grade) => {
        total += grade;
    });
    return total/ student3.get("grades").length;
});

console.log(`The student's name is ${student3.get("firstName")} ${student3.get("lastName")}`);
console.log(student3);
//how do i get the avg grade for student3
let average = student3.get("calculageAvgGrade")();
console.log(average);
//i can also loop thru using a for loop
for(const {key, value} of student3){
    console.log(`The key is ${key} and the value is ${value}`);
}

student3.set(student1, "This is student 1");
console.log(student3.get(student1));
for(const {key, value} of student3){
    console.log(`The key is ${key} and the value is ${value}`);
}

