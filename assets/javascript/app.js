var questionOne={
question: "In California, it is illegal to eat oranges while doing what?",
choiceA: "Bathing",
choiceB: "Driving",
choiceC: "Gardining",
choiceD: "Working on Computer",
Answer:"Driving"   
}
var questionOne={
    question: "What is a skink",
    choiceA: "Chocolate Bar",
    choiceB: "Lizard",
    choiceC: "Small river",
    choiceD: "Tree",
    Answer:"Lizard"   
    }

$(".start").on("click", function(){
    $("#question").append(questionOne.question);
})