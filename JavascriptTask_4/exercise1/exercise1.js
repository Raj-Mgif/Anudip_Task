// Create an empty array
let basket = [];

// Add 5 grocery items
basket.push("Milk");
basket.push("Bread");
basket.push("Eggs");
basket.push("Rice");
basket.push("Apples");

// Display all items
let output = document.getElementById("output");

output.innerHTML += "<h3>Basket Items:</h3>";
output.innerHTML += basket.join(", ") + "<br><br>";

// Remove the last item
let removedItem = basket.pop();

// Display updated basket
output.innerHTML += "<h3>Updated Basket:</h3>";
output.innerHTML += basket.join(", ") + "<br><br>";

// Display removed item
output.innerHTML += "<h3>Removed Item:</h3>";
output.innerHTML += removedItem;
