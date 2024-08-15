function calculate() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (!age || !gender || !height || !weight) {
        document.getElementById('bmiResult').innerText = 'Please fill in all fields.';
        return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    const bmi = weightInKg / (heightInMeters * heightInMeters);

    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }
    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
}

function clearFields() {
    document.getElementById('age').value = '     ';
    document.getElementById('gender').value = '    ';
    document.getElementById('height').value = '    ';
    document.getElementById('weight').value = '     ';
    document.getElementById('bmiResult').innerText = '      ';
}
