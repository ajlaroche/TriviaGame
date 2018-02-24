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
    var randomQuestion = 0;

    var questionAsk = "";
    var AnswerOne = "";
    var AnswerTwo = "";
    var AnswerThree = "";
    var AnswerFour = "";
    var correctAnswer = "";

    function loadQuestion(){
    randomQuestion = Math.floor(Math.random() * questionNumbers.length);

    questionAsk = eval("question" + questionNumbers[randomQuestion] + ".question");
    AnswerOne = eval("question" + questionNumbers[randomQuestion] + ".choiceA");
    AnswerTwo = eval("question" + questionNumbers[randomQuestion] + ".choiceB");
    AnswerThree = eval("question" + questionNumbers[randomQuestion] + ".choiceC");
    AnswerFour = eval("question" + questionNumbers[randomQuestion] + ".choiceD");
    correctAnswer = eval("question" + questionNumbers[randomQuestion] + ".Answer");

    $("#question").text(questionAsk);
        $("#optionOne").text(AnswerOne);
        $("#optionTwo").text(AnswerTwo);
        $("#optionThree").text(AnswerThree);
        $("#optionFour").text(AnswerFour);
    }


    $(".start").on("click", function () {
        loadQuestion();
    })

    $("#multipleChoice").on("click", function () {
         if ($("#" + correctAnswer).is(":checked")) {
            $("#feedback").text("That's Correct!") //Provide positive feedback here
        } else if ($("input[name='answers']:checked").length) {
            $("#feedback").text("Wrong Answer!"); //Provide negative feedback here
        }
    })
})