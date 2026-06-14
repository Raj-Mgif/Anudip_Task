// Create paragraph element
let para = document.createElement("p");

// Add text
para.innerText = "This paragraph is created using JavaScript DOM.";

// Select div
let div = document.getElementById("container");

// Append paragraph
div.appendChild(para);
