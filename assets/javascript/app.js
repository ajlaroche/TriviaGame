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

    var questionNumbers = ["One", "Two"];
    var originalQuestionNumbers = questionNumbers;
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

    function randomGenerate() {
        return randomQuestion = Math.floor(Math.random() * questionNumbers.length);
    }
    function generateQuestion() {

        while (questionNumbers[questionTest] === undefined) {
            questionTest = randomGenerate();
        }


        previousQuestions.push(questionTest);
        if (previousQuestions.length === originalQuestionNumbers.length) {
            isDone = true;
        }
        console.log(questionTest);
        console.log(previousQuestions);
        console.log(isDone);
        return questionTest;
    }

    function loadQuestion() {
        var selection = generateQuestion();
        console.log("selection is" + selection);
        $(".form-check-input").prop("checked", false);
        questionAsk = eval("question" + questionNumbers[selection] + ".question");
        AnswerOne = eval("question" + questionNumbers[selection] + ".choiceA");
        AnswerTwo = eval("question" + questionNumbers[selection] + ".choiceB");
        AnswerThree = eval("question" + questionNumbers[selection] + ".choiceC");
        AnswerFour = eval("question" + questionNumbers[selection] + ".choiceD");
        correctAnswer = eval("question" + questionNumbers[selection] + ".Answer");
        $("#multipleChoice").css("display", "block");
        $("#question").text(questionAsk);
        $("#optionOne").text(AnswerOne);
        $("#optionTwo").text(AnswerTwo);
        $("#optionThree").text(AnswerThree);
        $("#optionFour").text(AnswerFour);
        delete questionNumbers[selection];
        console.log(questionNumbers);
    }


    $(".start").on("click", function () {
        loadQuestion();
    })

    $("#multipleChoice").on("click", function () {
        if ($("#" + correctAnswer).is(":checked")) {
            $("#feedback").text("That's Correct!") //Provide positive feedback here
            numberCorrect++;
        } else if ($("input[name='answers']:checked").length) {
            $("#feedback").text("Wrong Answer!"); //Provide negative feedback here
            numberIncorrect++;
        }
        if (isDone) {
            $("#feedback").text("GAME OVER");
        } else {
            setTimeout(loadQuestion, 3000);
        }
    })
})