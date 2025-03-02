// Function to update the counter based on the action
let savedValues = []; // Array to store the saved values
let totalSum = 0; // Initialize total sum

function updateCounter(action) {
  let count = parseInt(document.getElementById("count").innerText, 10); // Convert the string to a number

  // Use switch for better readability
  switch (action) {
    case "increment":
      count++;
      break;
    case "decrement":
      if (count <= 0) {
        alert("Warning: Value is negative or zero. Cannot decrement further.");
      } else {
        count--;
      }
      break;
    case "reset":
      count = 0;
      savedValues = []; // Empty the savedValues array when reset is clicked
      totalSum = 0; // Reset the total sum when reset is clicked
      document.getElementById("saveTxt").innerText = "Previous Values: None"; // Clear saved values display
      break;
    case "save":
      savedValues.push(count); // Add the current value to the savedValues array

      // Only keep the last 3 values
      if (savedValues.length > 3) {
        savedValues.shift(); // Remove the oldest value if more than 3 saved
      }

      // Update the total sum with the current value
      totalSum += count;

      // Display the saved values and the total sum
      document.getElementById("saveTxt").innerText =
        "Previous Values: " + savedValues.join(", ") + " | Total Sum: " + totalSum;

      console.log("Saved value:", count); // Log the saved value
      count = 0; // Reset count after saving
      break;
    default:
      console.warn("Unknown action:", action);
  }

  document.getElementById("count").innerText = count; // Update the displayed value
}

// Add event listeners for increment, decrement, reset, and save buttons
document.getElementById("increment").addEventListener("click", function () {
  updateCounter("increment");
});

document.getElementById("decrement").addEventListener("click", function () {
  updateCounter("decrement");
});

document.getElementById("reset").addEventListener("click", function () {
  updateCounter("reset");
});

document.getElementById("save").addEventListener("click", function () {
  updateCounter("save");
});

