// Create a JavaScript program for a Student Report System

let students = [
  {
    name: "Arun",
    marks: [80, 75, 90],
  },
  {
    name: "Deepak",
    marks: [85, 95, 70],
  },
  {
    name: "Karan",
    marks: [60, 65, 72],
  },
];

// Loop through students
for (let i = 0; i < students.length; i++) {
  let total = 0;

  // Loop through Marks
  for (let j = 0; j < students[i].marks.length; j++) {
    total = total + students[i].marks[j];
  }

  // average
  let average = total / students[i].marks.length;

 
  console.log("Student Name :", students[i].name);
  console.log("Total Marks :", total);
  console.log("Average Marks :", average.toFixed(2));
  
}
