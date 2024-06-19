let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if (buttonText == 'x') {  // Use '==' for comparison
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;  // Correct property 'value'
        }
        else if (buttonText == 'C') {
            screenValue = '';  // Clear screenValue
            screen.value = screenValue;  // Update screen value to empty
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);  // Evaluate the expression
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;  // Update screen value
        }
    })
}
