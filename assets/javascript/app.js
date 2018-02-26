$(document).ready(function () {

    var questionOne = {
        question: "In California, it is illegal to eat oranges while doing what?",
        choiceA: "Bathing",
        choiceB: "Driving",
        choiceC: "Gardining",
        choiceD: "Working on Computer",
        Answer: "choiceB"
    }
    var questionTwo = {
        question: "What is a skink?",
        choiceA: "Chocolate Bar",
        choiceB: "Lizard",
        choiceC: "Small river",
        choiceD: "Tree",
        Answer: "choiceB"
    }
    var questionThree = {
        question: "The ulna is a long bone in which part of the body?",
        choiceA: "Arm",
        choiceB: "Ear",
        choiceC: "Leg",
        choiceD: "Neck",
        Answer: "choiceA"
    }
    var questionFour = {
        question: "Micky Dolenz, Michael Nesmith, Peter Tork, and Davy Jones were members of which band?",
        choiceA: "The Animals",
        choiceB: "The Beatles",
        choiceC: "The Buggles",
        choiceD: "The Monkees",
        Answer: "choiceD"
    }
    var questionFive = {
        question: " What is Lapsang souchong?",
        choiceA: "A breed of dog",
        choiceB: "A language",
        choiceC: "A mountain range",
        choiceD: "A type of tea",
        Answer: "choiceD"
    }
    var questionSix = {
        question: " Which country was partitioned by Austria, Russia and Prussia throughout the 1800s?",
        choiceA: "Findland",
        choiceB: "Poland",
        choiceC: "Romania",
        choiceD: "Switzerland",
        Answer: "choiceB"
    }
    var questionSeven = {
        question: "What became of Marie Antoinette on 16th October 1793?",
        choiceA: "She was beheaded",
        choiceB: "She was deported",
        choiceC: "She was divorced",
        choiceD: "She was pardoned",
        Answer: "choiceA"
    }
    var questionEight = {
        question: "From which country did Belgium achieve independence in 1831?",
        choiceA: "Denmark",
        choiceB: "Italy",
        choiceC: "France",
        choiceD: "Netherlands",
        Answer: "choiceD"
    }
    var questionNine = {
        question: "In which field of art is the Italian master Giotto best known?",
        choiceA: "Architecture",
        choiceB: "Ballet",
        choiceC: "Painting",
        choiceD: "Sculpture",
        Answer: "choiceC"
    }
    var questionTen = {
        question: "Which future American President was Eisenhower's Vice President?",
        choiceA: "Gerald Ford",
        choiceB: "John Kennedy",
        choiceC: "Lynden Johnson",
        choiceD: "Richard Nixon",
        Answer: "choiceD"
    }
    var questionEleven = {
        question: "How many electoral votes did Texas have in the 2004 Presidential elections?",
        choiceA: "34",
        choiceB: "44",
        choiceC: "54",
        choiceD: "64",
        Answer: "choiceA"
    }
    var questionTwelve = {
        question: "Which is the only American state not to have two state legislature houses?",
        choiceA: "Nebraska",
        choiceB: "Nevada",
        choiceC: "New Mexico",
        choiceD: "New York",
        Answer: "choiceA"
    }
    var questionThirteen = {
        question: "Which country forms the southern shoreline of Lake Victoria?",
        choiceA: "Kenya",
        choiceB: "Rwanda",
        choiceC: "Tanzania",
        choiceD: "Uganda",
        Answer: "choiceC"
    }
    var questionFourteen = {
        question: "Of which African country is Yaoundé the capital city?",
        choiceA: "Burundi",
        choiceB: "Cameroon",
        choiceC: "Chad",
        choiceD: "Mauritania",
        Answer: "choiceB"
    }
    var questionFifteen = {
        question: "Which African capital city is the nearest to Sicily?",
        choiceA: "Algiers",
        choiceB: "Rabat",
        choiceC: "Tripoli",
        choiceD: "Tunis",
        Answer: "choiceD"
    }
    var questionNumbers = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen"];
    var randomQuestion = 0;
    var questionAsk = "";
    var AnswerOne = "";
    var AnswerTwo = "";
    var AnswerThree = "";
    var AnswerFour = "";
    var correctAnswer = "";
    var numberCorrect = 0;
    var numberIncorrect = 0;
    var previousQuestions = [];
    var isDone = false;
    var questionTest;
    var gameLength = 5;
    var stateAnswer = "";
    var timeToAnswer = 25;
    var timer;
    var intervalID;

    console.log(questionNumbers);
    //Game functions
    function randomGenerate() {
        return randomQuestion = Math.floor(Math.random() * questionNumbers.length);
    }

    function generateQuestion() {

        while (questionNumbers[questionTest] === undefined) {
            questionTest = randomGenerate();
        }

        previousQuestions.push(questionTest);

        if (previousQuestions.length === gameLength) {
            isDone = true;
        }

        return questionTest;
    }

    function restart() {
        numberCorrect = 0;
        numberIncorrect = 0;
        questionNumbers = [];
        questionNumbers = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen"];
        isDone = false;
        previousQuestions = [];
        questionTest = "";
        loadQuestion();
        $("#scoringCorrect").empty();
        $("#scoringIncorrect").empty();
        console.log(questionNumbers);
    }

    function loadQuestion() {
        $("#start").hide();
        $("#restart").hide();
        $("#topMessage").show();
        $("#talkToPlayer").text("GOOD LUCK!");
        $("#feedback").empty();
        var selection = generateQuestion();
        $(".form-check-input").prop("checked", false);
        questionAsk = eval("question" + questionNumbers[selection] + ".question");
        AnswerOne = eval("question" + questionNumbers[selection] + ".choiceA");
        AnswerTwo = eval("question" + questionNumbers[selection] + ".choiceB");
        AnswerThree = eval("question" + questionNumbers[selection] + ".choiceC");
        AnswerFour = eval("question" + questionNumbers[selection] + ".choiceD");
        correctAnswer = eval("question" + questionNumbers[selection] + ".Answer");
        stateAnswer = eval("question" + questionNumbers[selection] + "." + correctAnswer);
        $("#multipleChoice").css("display", "block");
        $("#question").text(questionAsk);
        $("#optionOne").text(AnswerOne);
        $("#optionTwo").text(AnswerTwo);
        $("#optionThree").text(AnswerThree);
        $("#optionFour").text(AnswerFour);
        delete questionNumbers[selection];
        console.log(stateAnswer);
        timer = timeToAnswer;
        runTimer();
    }

    function gameOver() {
        setTimeout(function () {
            $("#feedback").text("GAME OVER");
            $("#countdown").empty();
            $("#question").empty();
            $("#multipleChoice").hide();
            $("#start").hide();
            $("#topMessage").hide();
            $("#restart").show();
            $("#scoringCorrect").text("Correct Answers: " + numberCorrect);
            $("#scoringIncorrect").text("Wrong Answers: " + numberIncorrect);
        }, 2000);
    }

    // Timer functions
    function decrement() {
        timer--;
        $("#countdown").html("Time remaining: " + timer);

        if (timer === 0) {
            stop();
            $("#countdown").html("Time Up");
            numberIncorrect++;
            if (isDone) {
                gameOver();
            } else {
                loadQuestion();
            }
        }
    }
    function runTimer() {
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 1000);
    }
    function stop() {
        clearInterval(intervalID);
    }


    // Interactive logic
    $("#start").on("click", function () {
        loadQuestion();
    })
    $("#restart").on("click", function () {
        restart();
    })

    $("#multipleChoice").on("click", function () {
        if ($("#" + correctAnswer).is(":checked")) {
            $("#feedback").text("That's Correct!") //Provide positive feedback here
            $("#question").empty();
            $("#multipleChoice").css("display", "none");
            stop();
            $("#countdown").empty();
            numberCorrect++;
        } else if ($("input[name='answers']:checked").length) {
            $("#feedback").text("Wrong! The right Answer is " + stateAnswer); //Provide negative feedback here
            $("#question").empty();
            $("#multipleChoice").css("display", "none");
            stop();
            $("#countdown").empty();
            numberIncorrect++;
        }
        if (isDone) {
            $("#countdown").empty();
            gameOver();
        } else {
            setTimeout(loadQuestion, 3000);
        }
    })
})