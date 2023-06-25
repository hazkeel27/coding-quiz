//tags which will be utilized assgined to the following variables
var viewHighscores = document.querySelector(".view-highscores");
var timeLeft = document.querySelector(".time-left");
var container = document.querySelector("#container");


//init fuction runs on page load
function init(){
    //h1 tag is created, edited, and appended to the container
    var mainHeader = document.createElement('h1');
    mainHeader.textContent = 'Coding Quiz Challenge';
    container.appendChild(mainHeader);

    //paragraph tag is created, edited, and appended to the container
    var paragraphElement = document.createElement('p');
    paragraphElement.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 15 seconds!';
    container.appendChild(paragraphElement);

    //button tag is created, edited, and appended to the container
    var startButton = document.createElement('button');
    startButton.textContent = 'Start Quiz';
    container.appendChild(startButton);

    // function runs on submit button click event and takes user to question 1
    startButton.addEventListener('click', function(event) {

        event.stopPropagation();

        //time interval begins counting down to 0s from 75s
        var seconds = 75;
        var timerInterval = setInterval(function(){
            timeLeft.textContent = seconds + 's';
            seconds--;
            if (seconds === 0){
                clearInterval(timerInterval);
            }
        }, 1000);

        //container's child elements are cleared
        container.innerHTML = '';

        //new div for the first question is created within container div
        var firstQuestion = document.createElement('div');

        //h1 tag is created, edited, and appended
        mainHeader = document.createElement('h1');
        mainHeader.textContent = 'String values must be encolsed with _______ when being assigned to variables.';
        firstQuestion.appendChild(mainHeader);

        //ol and li tags are created
        var orderedList = document.createElement('ol');
        var listItem1 = document.createElement('li');
        var listItem2 = document.createElement('li');
        var listItem3 = document.createElement('li');
        var listItem4 = document.createElement('li');

        //button tags are created
        var answerButton1 = document.createElement('button');
        var answerButton2 = document.createElement('button');
        var answerButton3 = document.createElement('button');
        var answerButton4 = document.createElement('button');

        //answer options are added to button tag's text content
        answerButton1.textContent = 'commas';
        answerButton2.textContent = 'curly brackets';
        answerButton3.textContent = 'quotes';
        answerButton4.textContent = 'parentheses';

        //button tags are appended to the li tags
        listItem1.appendChild(answerButton1);
        listItem2.appendChild(answerButton2);
        listItem3.appendChild(answerButton3);
        listItem4.appendChild(answerButton4);

        //li tags are appended to ol tag
        orderedList.appendChild(listItem1);
        orderedList.appendChild(listItem2);
        orderedList.appendChild(listItem3);
        orderedList.appendChild(listItem4);

        //ol tag is appended to firstQuestion div
        firstQuestion.appendChild(orderedList); 

        //firstQuestion div is appended to container div
        container.appendChild(firstQuestion);
        
        // function runs on answer button click event and takes user to question 2
        firstQuestion.addEventListener('click', function(event){

            event.stopPropagation();

            var firstAnswer = event.target;

            //checks if the button element is clicked
            if (firstAnswer.matches('button')){

                //the button's text content is assigned to variable
                firstAnswer = firstAnswer.textContent;
                
                console.log(firstAnswer);

                //result span will used to display the result
                var result = document.createElement('span');

                //checks the answer and appends the result
                if (firstAnswer === 'quotes'){
                    result.textContent = 'Correct';
                }
                else{
                    result.textContent = 'Incorrect';
                }
                
                //result's visuals are edited
                result.setAttribute('style', 'font-size: medium; font-family: Verdana; color: grey;');

                //firstQuestion div's child elements are cleared
                firstQuestion.innerHTML = '';

                //new div for the second question is created within firstQuestion div
                var secondQuestion = document.createElement('div');

                //h1 tag is edited, and appended
                mainHeader.textContent = 'Arrays in JavaScript can be used to store _________.';
                secondQuestion.appendChild(mainHeader);  

                //answer options are added to button tag's text content
                answerButton1.textContent = 'numbers and strings';
                answerButton2.textContent = 'other arrays';
                answerButton3.textContent = 'booleans';
                answerButton4.textContent = 'all of the above';

                //button tags are appended to the li tags
                listItem1.appendChild(answerButton1);
                listItem2.appendChild(answerButton2);
                listItem3.appendChild(answerButton3);
                listItem4.appendChild(answerButton4);

                //li tags are appended to ol tag
                orderedList.appendChild(listItem1);
                orderedList.appendChild(listItem2);
                orderedList.appendChild(listItem3);
                orderedList.appendChild(listItem4);

                //ol tag is appended to secondQuestion div
                secondQuestion.appendChild(orderedList); 

                //result of the first question is appended
                secondQuestion.appendChild(result);

                //shows the result on screen for 2 seconds
                var resultSeconds = 2;
                var resultTimer = setInterval(function(){
                    resultSeconds--;
                    if (resultSeconds === 0){
                        clearInterval(resultTimer);
                        result.textContent = '';
                    }
                }, 1000);

                //secondQuestion div is appended to firstQuestion div
                firstQuestion.appendChild(secondQuestion);

               // function runs on answer button click event and takes user to question 3
                secondQuestion.addEventListener('click', function(event){

                event.stopPropagation();

                var secondAnswer = event.target;

                //checks if the button element is clicked
                if (secondAnswer.matches('button')){

                    //the button's text content is assigned to variable
                    secondAnswer = secondAnswer.textContent;
                    
                    console.log(secondAnswer);

                    //checks the answer and appends the result
                    if (secondAnswer === 'all of the above'){
                        result.textContent = 'Correct';
                    }
                    else{
                        result.textContent = 'Incorrect';
                    }
                    
                    //secondQuestion div's child elements are cleared
                    secondQuestion.innerHTML = '';

                    //new div for the second question is created within firstQuestion div
                    var thirdQuestion = document.createElement('div');

                    //h1 tag is edited, and appended
                    mainHeader.textContent = 'The condition in an if / else statement is enclosed within _________.';
                    thirdQuestion.appendChild(mainHeader);  

                    //answer options are added to button tag's text content
                    answerButton1.textContent = 'quotes';
                    answerButton2.textContent = 'curly brackets';
                    answerButton3.textContent = 'parentheses';
                    answerButton4.textContent = 'square brackets';

                    //button tags are appended to the li tags
                    listItem1.appendChild(answerButton1);
                    listItem2.appendChild(answerButton2);
                    listItem3.appendChild(answerButton3);
                    listItem4.appendChild(answerButton4);

                    //li tags are appended to ol tag
                    orderedList.appendChild(listItem1);
                    orderedList.appendChild(listItem2);
                    orderedList.appendChild(listItem3);
                    orderedList.appendChild(listItem4);

                    //ol tag is appended to thirdQuestion div
                    thirdQuestion.appendChild(orderedList); 

                    //result of the second question is appended
                    thirdQuestion.appendChild(result);

                    //shows the result on screen for 2 seconds
                    resultSeconds = 2;
                    resultTimer = setInterval(function(){
                        resultSeconds--;
                        if (resultSeconds === 0){
                            clearInterval(resultTimer);
                            result.textContent = '';
                        }
                    }, 1000);

                    //thirdQuestion div is appended to secondQuestion div
                    secondQuestion.appendChild(thirdQuestion);






                    // function runs on answer button click event and takes user to question 4
                    thirdQuestion.addEventListener('click', function(event){

                    event.stopPropagation();
    
                    var thirdAnswer = event.target;
    
                    //checks if the button element is clicked
                    if (thirdAnswer.matches('button')){
    
                        //the button's text content is assigned to variable
                        thirdAnswer = thirdAnswer.textContent;
                        
                        console.log(thirdAnswer);
    
                        //checks the answer and appends the result
                        if (thirdAnswer === 'curly brackets'){
                            result.textContent = 'Correct';
                        }
                        else{
                            result.textContent = 'Incorrect';
                        }
                        
                        //thirdQuestion div's child elements are cleared
                        thirdQuestion.innerHTML = '';
    
                        //new div for the second question is created within firstQuestion div
                        var fourthQuestion = document.createElement('div');
    
                        //h1 tag is edited, and appended
                        mainHeader.textContent = 'Commonly used data types DO NOT include';
                        fourthQuestion.appendChild(mainHeader);  
    
                        //answer options are added to button tag's text content
                        answerButton1.textContent = 'strings';
                        answerButton2.textContent = 'booleans';
                        answerButton3.textContent = 'alerts';
                        answerButton4.textContent = 'numbers';
    
                        //button tags are appended to the li tags
                        listItem1.appendChild(answerButton1);
                        listItem2.appendChild(answerButton2);
                        listItem3.appendChild(answerButton3);
                        listItem4.appendChild(answerButton4);
    
                        //li tags are appended to ol tag
                        orderedList.appendChild(listItem1);
                        orderedList.appendChild(listItem2);
                        orderedList.appendChild(listItem3);
                        orderedList.appendChild(listItem4);
    
                        //ol tag is appended to thirdQuestion div
                        fourthQuestion.appendChild(orderedList); 
    
                        //result of the second question is appended
                        fourthQuestion.appendChild(result);
    
                        //shows the result on screen for 2 seconds
                        resultSeconds = 2;
                        resultTimer = setInterval(function(){
                            resultSeconds--;
                            if (resultSeconds === 0){
                                clearInterval(resultTimer);
                                result.textContent = '';
                            }
                        }, 1000);
    
                        //fourthQuestion div is appended to thirdQuestion div
                        thirdQuestion.appendChild(fourthQuestion);
    
    
                    } //if the button element is clicked ends
                }); //question 4 code ends
                









                } //if the button element is clicked ends
            }); //question 3 code ends

            } //if the button element is clicked ends
        }); //question 2 code ends

    }); //start button click event and question 1 code ends
} //init() ends

//init() function is executed on page load
init();







