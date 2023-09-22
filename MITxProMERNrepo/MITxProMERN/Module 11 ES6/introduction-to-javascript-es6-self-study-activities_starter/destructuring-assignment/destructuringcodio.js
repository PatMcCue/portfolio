// Section 1: Array Destructuring

const books = ["fiction", ["horror", "literary"], "science"];

// TODO: Use destructuring to create the variables fiction horror literary and science

const [fiction, [horror, literary], science] = books;
console.log(fiction);
console.log(horror);
console.log(literary);
console.log(science);


////

// Section 2: Object Destructuring

const Student = {
  firstName: "Joe",
  university: "MIT",
  studentInfo: {
    studentid: 555,
  },
};

const {firstName, university, studentInfo: {studentid}} = Student;

console.log(firstName);
console.log(university);
console.log(studentid);

// TODO: Use destructuring to create the variables firstName university and studentid

////

//don't change anything below this line 
module.exports = {
    fiction,
    horror,
    literary,
    science,
    firstName,
    university,
    studentid,
  };


