var Pagenumber = 1;
var Score = 0;

var Questionbank = ["Which planet is known as the Red Planet?","Who wrote 'Romeo and Juliet'?","What is the largest ocean on Earth?","How many Continents are there?",
    "Which element has the chemical symbol O?", "What is the smallest unit of life?","Who was the first president of the US?","What is the process by which plants make their food?",
    "Which instrument is used to mesure temperature?","What is the capital of France?","What is the largest planet in our solar system?","Who painted the Mona Lisa?",
    "What is the hardest natural substance on Earth?","Which country is known as the Land of the Rising Sun?","What is the smallest country in the world by land area?",
    "What is the main ingredient in traditional Japanese miso soup?","Which is the longest river in the world?","In which year did the Titanic sink?","What does the acronym 'WWW' stand for?",
    "Who is known as the Father of Computers?","What is the capital of Canada?","Which element has the chemical symbol H?","How many states are there in the United States?","Which planet is closest to the sun?",
    "What is the tallest mountain in the world?","What is the largest bone in the human body?","Who was the 16th president of the United States?","What is the main language spoken in Brazil?","Which gas is most abundant in the Earth’s atmosphere?",
    "What is the smallest prime number?"
]

QUESTIONSHEET = {
    "What is the capital of France?":["Berlin","Madrid","Rome","Paris"],
    "Which planet is known as the Red Planet?":["Earth","Mars","Jupiter","Venus"],
    "Who wrote 'Romeo and Juliet'?":["William Shakespeare","Charles Dickens","J.K. Rowling","Mark Twain"],
    "What is the largest ocean on Earth?":["Atlantic Ocean","Indian Ocean","Arctic Ocean","Pacific Ocean"],
    "How many Continents are there?":[5,6,7,8],
    "Which element has the chemical symbol O?":["Gold","Oxygen","Silver","Iron"],
    "What is the smallest unit of life?":["Atom","Molecule","Cell","Organism"],
    "Who was the first president of the US?":["Abraham Lincoln","George Washington","Thomas Jefferson","John Adams"],
    "What is the process by which plants make their food?":["Respiration","Digestion","Photosynthesis","Fermentation"],
    "Which instrument is used to mesure temperature?":["Barometer","Hygrometer","Thermometer","Anemometer"],
    "What is the largest planet in our solar system?":["Earth","Jupiter","Saturn","Neptune"],
    "Who painted the Mona Lisa?":["Vincent van Gogh","Pablo Picasso","Leonardo da Vinci","Claude Monet"],
    "What is the hardest natural substance on Earth?":["Gold","Iron","Diamond","Silver"],
    "Which country is known as the Land of the Rising Sun?":["China","Japan","India","South Korea"],
    "What is the smallest country in the world by land area?":["Monaco","Vatican City","San Marino","Liechtenstein"],
    "What is the main ingredient in traditional Japanese miso soup?":["Tofu","Seaweed","Miso paste","Rice"],
    "Which is the longest river in the world?":["Amazon River","Nile River","Yangtze River","Mississippi River"],
    "In which year did the Titanic sink?":[1905,1912,1923,1930],
    "What does the acronym 'WWW' stand for?":["World Wide Web","World Wide Wind","Wide World Web","Web World Wide"],
    "Who is known as the Father of Computers?":["Alan Turing","Charles Babbage","Thomas Edison","Bill Gates"],
    "What is the capital of Canada?":["Toronto","Vancouver","Ottawa","Montreal"],
    "Which element has the chemical symbol H?":["Helium","Hydrogen","Hafnium","Holmium"],
    "How many states are there in the United States?":[48,49,50,51],
    "Which planet is closest to the sun?":["Venus","Earth","Mercury","Mars"],
    "What is the tallest mountain in the world?":["K2","Kangchenjunga","Lhotse","Mount Everest"],
    "What is the largest bone in the human body?":["Femur","Tibia","Humerus","Spine"],
    "Who was the 16th president of the United States?":["George Washington","Thomas Jefferson","Abraham Lincoln","Andrew Jackson"],
    "What is the main language spoken in Brazil?":["Spanish","Portuguese","French","English"],
    "Which gas is most abundant in the Earth’s atmosphere?":["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen"],
    "What is the smallest prime number?":[0,1,2,3]
}

ANSWERSHEET = {
    "What is the capital of France?":"Paris",
    "Which planet is known as the Red Planet?":"Mars",
    "Who wrote 'Romeo and Juliet'?":"William Shakespeare",
    "What is the largest ocean on Earth?":"Pacific Ocean",
    "How many Continents are there?": 7,
    "Which element has the chemical symbol O?": "Oxygen",
    "What is the smallest unit of life?": "Cell",
    "Who was the first president of the US?": "George Washington",
    "What is the process by which plants make their food?": "Photosynthesis",
    "Which instrument is used to mesure temperature?": "Thermometer",
    "What is the largest planet in our solar system?":"Jupiter",
    "Who painted the Mona Lisa?":"Leonardo da Vinci",
    "What is the hardest natural substance on Earth?":"Diamond",
    "Which country is known as the Land of the Rising Sun?":"Japan",
    "What is the smallest country in the world by land area?":"Vatican City",
    "What is the main ingredient in traditional Japanese miso soup?":"Miso paste",
    "Which is the longest river in the world?":"Nile River",
    "In which year did the Titanic sink?":1912,
    "What does the acronym 'WWW' stand for?":"World Wide Web",
    "Who is known as the Father of Computers?":"Charles Babbage",
    "What is the capital of Canada?":"Ottawa",
    "Which element has the chemical symbol H?": "Hydrogen",
    "How many states are there in the United States?":50,
    "Which planet is closest to the sun?":"Mercury",
    "What is the tallest mountain in the world?":"Mount Everest",
    "What is the largest bone in the human body?":"Femur",
    "Who was the 16th president of the United States?":"Abraham Lincoln",
    "What is the main language spoken in Brazil?":"Portuguese",
    "Which gas is most abundant in the Earth’s atmosphere?":"Nitrogen",
    "What is the smallest prime number?":2
}


function NextQuestion() {
    document.getElementById("Title").textContent = Questionbank[Math.floor(Math.random() * Questionbank.length)]
    Index = Questionbank.indexOf(document.getElementById("Title").textContent)
    document.getElementById("Choice#1").textContent = QUESTIONSHEET[document.getElementById("Title").textContent][0]
    document.getElementById("Choice#2").textContent = QUESTIONSHEET[document.getElementById("Title").textContent][1]
    document.getElementById("Choice#3").textContent = QUESTIONSHEET[document.getElementById("Title").textContent][2]
    document.getElementById("Choice#4").textContent = QUESTIONSHEET[document.getElementById("Title").textContent][3]
    Questionbank.splice(Index,1)
}

NextQuestion()

document.getElementById("Choice#1").onclick = function() {
    if (document.getElementById("Choice#1").textContent == ANSWERSHEET[document.getElementById("Title").textContent]){
        Score++
        alert("Right Answer")
    } else{
        alert(`Wrong, the answer was ${ANSWERSHEET[document.getElementById("Title").textContent]}`)
    }
    if (Number(document.getElementById("Page").textContent) < 10){
        Pagenumber++
        document.getElementById("Page").textContent = Pagenumber
        NextQuestion()
    } else {
        document.getElementById("Page").textContent = "Results";
        document.getElementById("Question").hidden = true;
        document.getElementById("Score").hidden = false;
        document.getElementById("Congrats").hidden = false;
        document.getElementById("Score").textContent = `${Score}/10`;
    }
}
document.getElementById("Choice#2").onclick = function() {
    if (document.getElementById("Choice#2").textContent == ANSWERSHEET[document.getElementById("Title").textContent]){
        Score++
        alert("Right Answer")
    } else {
        alert(`Wrong, the answer was ${ANSWERSHEET[document.getElementById("Title").textContent]}`)
    }
    if (Number(document.getElementById("Page").textContent) < 10){
        Pagenumber++
        document.getElementById("Page").textContent = Pagenumber
        NextQuestion()
    } else {
        document.getElementById("Page").textContent = "Results";
        document.getElementById("Question").hidden = true;
        document.getElementById("Score").hidden = false;
        document.getElementById("Congrats").hidden = false;
        document.getElementById("Score").textContent = `${Score}/10`;
    }
}
document.getElementById("Choice#3").onclick = function() {
    if (document.getElementById("Choice#3").textContent == ANSWERSHEET[document.getElementById("Title").textContent]){
        Score++
        alert("Right Answer")
    } else {
        alert(`Wrong, the answer was ${ANSWERSHEET[document.getElementById("Title").textContent]}`)
    }
    if (Number(document.getElementById("Page").textContent) < 10){
        Pagenumber++
        document.getElementById("Page").textContent = Pagenumber
        NextQuestion()
    } else {
        document.getElementById("Page").textContent = "Results";
        document.getElementById("Question").hidden = true;
        document.getElementById("Score").hidden = false;
        document.getElementById("Congrats").hidden = false;
        document.getElementById("Score").textContent = `${Score}/10`;
    }
}
document.getElementById("Choice#4").onclick = function() {
    if (document.getElementById("Choice#4").textContent == ANSWERSHEET[document.getElementById("Title").textContent]){
        Score++
        alert("Right Answer")
    } else {
        alert(`Wrong, the answer was ${ANSWERSHEET[document.getElementById("Title").textContent]}`)
    }
    if (Number(document.getElementById("Page").textContent) < 10){
        Pagenumber++
        document.getElementById("Page").textContent = Pagenumber
        NextQuestion()
    } else {
        document.getElementById("Page").textContent = "Results";
        document.getElementById("Question").hidden = true;
        document.getElementById("Score").hidden = false;
        document.getElementById("Congrats").hidden = false;
        document.getElementById("Score").textContent = `${Score}/10`;
    }
}