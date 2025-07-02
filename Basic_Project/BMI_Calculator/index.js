document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const results = document.getElementById("results");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting/reloading the page

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      results.innerHTML = `<p style="color: red;">Please enter valid height and weight values.</p>`;
      return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let message = "";

    if (bmi < 18.6) {
      message = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = "Normal weight";
    } else {
      message = "Overweight";
    }

    results.innerHTML = `
      <h3>Your BMI is: ${bmi}</h3>
      <p>You are classified as: <strong>${message}</strong></p>
    `;
  });
});
