var Pagenumber = 1;
var Score = 0;

var Questions = ["Which planet is known as the Red Planet?","Who wrote 'Romeo and Juliet'?","What is the largest ocean on Earth?","How many Continents are there?",
    "Which element has the chemical symbol O?", "What is the smallest unit of life?","Who was the first president of the US?","What is the process by which plants make their food?",
    "Which instrument is used to mesure temperature?"
]
var UsedQuestions = ["What is the capital of France?"]

QUESTIONSHEET = {
    "Which planet is known as the Red Planet?":["Earth","Mars","Jupiter","Venus"],
    "Who wrote 'Romeo and Juliet'?":["William Shakespeare","Charles Dickens","J.K. Rowling","Mark Twain"],
    "What is the largest ocean on Earth?":["Atlantic Ocean","Indian Ocean","Arctic Ocean","Pacific Ocean"],
    "How many Continents are there?":[5,6,7,8],
    "Which element has the chemical symbol O?":["Gold","Oxygen","Silver","Iron"],
    "What is the smallest unit of life?":["Atom","Molecule","Cell","Organism"],
    "Who was the first president of the US?":["Abraham Lincoln","George Washington","Thomas Jefferson","John Adams"],
    "What is the process by which plants make their food?":["Respiration","Digestion","Photosynthesis","Fermentation"],
    "Which instrument is used to mesure temperature?":["Barometer","Hygrometer","Thermometer","Anemometer"]
}

ANSWERSHEET = {
    "What is the capital of France?":"Paris",
    "Which planet is known as the Red Planet?":"Mars",
    "Who wrote 'Romeo and Juliet'?":"William Shakespeare",
    "What is the largest ocean on Earth":"Pacific Ocean"
}

function NextQuestion() {
    document.getElementById("Title").textContent = Questions[Math.floor(Math.random() * Questions.length)]
    document.getElementById("Choice#1").textContent = QUESTIONSHEET[document.getElementById("Title").textContent][0]
    document.getElementById("Choice#2").textContent = QUESTIONSHEET[document.getElementById("Title").textContent][1]
    document.getElementById("Choice#3").textContent = QUESTIONSHEET[document.getElementById("Title").textContent][2]
    document.getElementById("Choice#4").textContent = QUESTIONSHEET[document.getElementById("Title").textContent][3]
    // Remove Question frpm Questions and put into Used Question
}



document.getElementById("Choice#1").onclick = function() {
    if (document.getElementById("Choice#1").textContent === ANSWERSHEET[document.getElementById("Title").textContent]){
        Score++
        console.log(Score)
    }
    if (Number(document.getElementById("Page").textContent) < 10){
        Pagenumber++
        document.getElementById("Page").textContent = Pagenumber
        NextQuestion()
    } else {
        // Go to Results Page
        console.log("")
    }
}