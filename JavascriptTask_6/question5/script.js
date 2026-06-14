// Select list
let list = document.getElementById("subjects");

// Get all list items
let items = list.getElementsByTagName("li");

// Remove third subject
items[2].remove();

// Replace first subject
let newSubject = document.createElement("li");
newSubject.textContent = "Artificial Intelligence";

list.replaceChild(newSubject, items[0]);

// Add new subject at end
let addSubject = document.createElement("li");
addSubject.textContent = "Data Structures";

list.appendChild(addSubject);
