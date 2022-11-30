// Select Elements
let countSpan = document.querySelector(".count span");
let bullets = document.querySelector(".bullets .Spans");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answer-area");
let submitButton = document.querySelector(".submit-button");
let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");


//set options
let currentIndex = 0;


function getQutions() {
    let myRequest = new XMLHttpRequest();      //IDK This

    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questionsObject = JSON.parse(this.responseText);
            let qCount = questionsObject.length;

            //create Bullets + set questions count
            createBullets(qCount)

            //Add Question Data
            addQuestionData(questionsObject[currentIndex], qCount);

        }
    };

    myRequest.open("GET", "html_questions.json", true);
    myRequest.send();

}
getQutions();

function createBullets(num) {
    countSpan.innerHTML = num;

    //create spans 
    for (let i = 0; i < num; i++) {

        //createBullets
        let theBullet = document.createElement("span");

        //Check if its first span
        if (i === 0) {
            theBullet.className = "on"
        }
        // Append Bullets To Main Bullet Container
        bulletsSpanContainer.appendChild(theBullet);
    }
}

function addQuestionData(obj, count) {

    //create h2 Question title
    let questiontitle = document.createElement("h2")

    //create Question text
    let questiontext = document.createTextNode(obj['title'])

    //append text to h2
    questiontitle.appendChild(questiontext)


    //append the h2 to the quiz area
    quizArea.appendChild(questiontitle)

    // Create The Answers
    for (let i = 1; i <= 4; i++) {

        //create main answer div
        let mainDiv = document.createElement('div')
        mainDiv.className = 'answer'

        let radioInput = document.createElement("input")

        // Add Type + Name + Id + Data-Attribute
        radioInput.name = "question";
        radioInput.type = "radio";
        radioInput.id = `answer_${i}`;
        radioInput.dataset.answer = obj[`answer_${i}`];

        // Make First Option Selected
        if (i === 1) {
            radioInput.checked = true;
        }

        // Create Label
        let theLabel = document.createElement("label");

        // Add For Attribute
        theLabel.htmlFor = `answer_${i}`;

        // Create Label Text
        let theLabelText = document.createTextNode(obj[`answer_${i}`]);

        //add the text to label
        theLabel.appendChild(theLabelText)

        //add input + lable to main div
        mainDiv.appendChild(radioInput)
        mainDiv.appendChild(theLabel)

        // Append All Divs To Answers Area
        answersArea.appendChild(mainDiv);

    }

}

function checkanswer(answer,count){
console.log(answer)
console.log(count)

}


















