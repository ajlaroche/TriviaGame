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
    var numberCorrect=0;
    var numberIncorrect=0;
    var previousQuestions=[];
    var isDone=false;

    function randomGenerate(){
       randomQuestion = Math.floor(Math.random() * questionNumbers.length); 
    }
    function generateQuestion(){
        randomGenerate();
        for (i=0;i<previousQuestions;i++){
            if (randomQuestion===previousQuestions[i]){
                randomGenerate();
            } else if(previousQuestions.length=questionNumbers.length){
                isDone=true;
            }
            else{
                previousQuestions.push(randomQuestion);
            }
        }
    }

    function loadQuestion() {
        generateQuestion();

        questionAsk = eval("question" + questionNumbers[randomQuestion] + ".question");
        AnswerOne = eval("question" + questionNumbers[randomQuestion] + ".choiceA");
        AnswerTwo = eval("question" + questionNumbers[randomQuestion] + ".choiceB");
        AnswerThree = eval("question" + questionNumbers[randomQuestion] + ".choiceC");
        AnswerFour = eval("question" + questionNumbers[randomQuestion] + ".choiceD");
        correctAnswer = eval("question" + questionNumbers[randomQuestion] + ".Answer");
        $("#multipleChoice").css("display", "block");
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
            numberCorrect++;
        } else if ($("input[name='answers']:checked").length) {
            $("#feedback").text("Wrong Answer!"); //Provide negative feedback here
            numberIncorrect++;
        }
    })
})