// Генерация случайного задания
function generateTask() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let question = `${num1} ${operation} ${num2}`;
    let correctAnswer;

    switch (operation) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = (num1 / num2).toFixed(2); // Округляем до 2 знаков
            break;
    }

    return { question, correctAnswer };
}

// Работа с интерфейсом
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const feedbackElement = document.getElementById('feedback');
const checkButton = document.getElementById('check-btn');

// Текущее задание
let currentTask = generateTask();
questionElement.textContent = `Решите: ${currentTask.question}`;

// Проверка ответа
checkButton.addEventListener('click', () => {
    const userAnswer = parseFloat(answerElement.value);
    if (userAnswer === parseFloat(currentTask.correctAnswer)) {
        feedbackElement.textContent = 'Правильно! Отличная работа!';
    } else {
        feedbackElement.textContent = 'Неправильно. Попробуйте еще раз.';
    }
});
