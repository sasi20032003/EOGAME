let currentNumber;

function generateNumber() {
    currentNumber = Math.floor(Math.random() * 100) + 1;
    const numberDisplay = document.getElementById('numberDisplay');
    numberDisplay.textContent = currentNumber;
    numberDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        numberDisplay.style.transform = 'scale(1)';
    }, 500);
    document.getElementById('result').textContent = '';
}

function guess(type) {
    if (currentNumber === undefined) {
        alert('Generate a number first!');
        return;
    }

    const isEven = currentNumber % 2 === 0;
    const resultDisplay = document.getElementById('result');
    const correctSound = document.getElementById('correctSound');
    const wrongSound = document.getElementById('wrongSound');

    if ((isEven && type === 'even') || (!isEven && type === 'odd')) {
        resultDisplay.textContent = 'Correct!';
        resultDisplay.style.color = 'green';
        correctSound.play();
    } else {
        resultDisplay.textContent = 'Wrong!';
        resultDisplay.style.color = 'red';
        wrongSound.play();
    }
}
