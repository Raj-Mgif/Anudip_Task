// Ask user's name
let userName = prompt("Enter your name:");

// Ask favorite movie name
let movieName = prompt("Enter your favorite movie:");

// Welcome message
alert("Welcome, " + userName + "!");

// Booking confirmation
alert("Your ticket for '" + movieName + "' has been booked successfully!");

// Display booking details
let output = document.getElementById("output");

output.innerHTML += "<h3>Booking Details</h3>";
output.innerHTML += "<p><strong>Name:</strong> " + userName + "</p>";
output.innerHTML += "<p><strong>Movie:</strong> " + movieName + "</p>";
output.innerHTML += "<p><strong>Status:</strong> Booking Confirmed</p>";
