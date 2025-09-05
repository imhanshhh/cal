 const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const btnValue = button.textContent;
        if (btnValue === 'AC') {
            inputBox.value = '';
        } else if (btnValue === 'DEL') {
            inputBox.value = inputBox.value.slice(0, -1);
        } else if (btnValue === '=') {
            try {
                // Replace % with /100 for percentage calculation
                let expression = inputBox.value.replace(/%/g, '/100');
                // Evaluate expression
                let result = eval(expression);
                inputBox.value = result;
            } catch {
                inputBox.value = 'Error';
            }
        } else {
            inputBox.value += btnValue;
        }
    });
});