// Check which exercise page is loaded
const page = document.body.id;

if (page === "exercise1") {
    // Exercise 1 – Grocery Store Basket

    let basket = [];

    basket.push("Milk");
    basket.push("Bread");
    basket.push("Eggs");
    basket.push("Rice");
    basket.push("Apples");

    let removedItem = basket.pop();

    document.getElementById("output").innerHTML = `
        <h3>Basket Items After Adding:</h3>
        <p>Milk, Bread, Eggs, Rice, Apples</p>

        <h3>Updated Basket:</h3>
        <p>${basket.join(", ")}</p>

        <h3>Removed Item:</h3>
        <p>${removedItem}</p>
    `;
}

if (page === "exercise2") {
    // Exercise 2 – Morning School Attendance

    let students = ["Ali", "Sara", "Ahmed", "Fatima", "Zain"];

    students.unshift("Ayesha");
    students.shift();

    document.getElementById("output").innerHTML = `
        <h3>Final Attendance List:</h3>
        <p>${students.join(", ")}</p>
    `;
}

if (page === "exercise3") {
    // Exercise 3 – Movie Ticket Booking

    let userName = prompt("Enter your name:");
    let movieName = prompt("Enter your favorite movie:");

    alert(`Welcome, ${userName}!`);
    alert(`Your ticket for '${movieName}' has been booked successfully!`);

    document.getElementById("output").innerHTML = `
        <h3>Booking Details</h3>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Movie:</strong> ${movieName}</p>
        <p><strong>Status:</strong> Booking Confirmed</p>
    `;
}