const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Converting height to meters

    const bmi = weight / (height * height);
    const roundedBMI = bmi.toFixed(2);

    let message = '';
    if(isNaN(bmi)) {
        message = 'Please enter valid values for weight and height.';
        result.style.color = '#f44336';
    } else {
        if(bmi < 18.5) {
            message = `Your BMI is ${roundedBMI}. Your are underweight.`;
            result.style.color = '#f44336';
        }
        else if (bmi >= 18.5 && bmi < 25) {
            message = `Your BMI is ${roundedBMI}. You are within a healthy weight range.`;
            result.style.color = '#4caf50';
        }
        else if (bmi >= 25 && bmi < 30) {
            message = `Your BMI is ${roundedBMI}. You are overweight.`;
            result.style.color = '#f44336';
        }
        else {
            message = `Your BMI is ${roundedBMI}. You are obese.`;
            result.style.color = '#f44336';
        }
    }
    result.textContent = message;
});