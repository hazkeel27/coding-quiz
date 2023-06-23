//tags which will be utilized assgined to the following variables
var viewHighscores = document.querySelector(".view-highscores");
var timeLeft = document.querySelector(".time-left");
var container = document.querySelector("#container");

function init(){
    var mainHeader = document.createElement('h1');
    mainHeader.textContent = 'Coding Quiz Challenge';
    container.appendChild(mainHeader);

    var paragraphElement = document.createElement('p');
    paragraphElement.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 15 seconds!';
    container.appendChild(paragraphElement);

    var startButton = document.createElement('button');
    startButton.textContent = 'Start Quiz';
    container.appendChild(startButton);
}
init();
