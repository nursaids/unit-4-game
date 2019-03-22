

var scoreResult = document.getElementById("scoreResult");

scoreResult.innerHtml = 0;

var targetScore = document.getElementById("targetScore");
targetScore.innerHTML =  Math.floor((Math.random() * 100) + 20);

var score = 0;

var wins = 0;

var losses = 0;


$("crystal1").click(function(){
  $("crystal1").val(2);
});

$("crystal2").click(function(){
  $("crystal2").val(5);
});

$("crystal3").click(function(){
  $("crystal3").val(8);
});

$("crystal4").click(function(){
  $("crystal4").val(7);
});



function addToScore(val){
  scoreResult = scoreResult + crystal1;
}


crystal1.addEventListener("click", function() {
    
    addToScore(this.value);
    checkPlayerScore();
  });
  
  crystal2.addEventListener("click", function() {
    
    addToScore(this.value);
    checkPlayerScore();
  });

  crystal3.addEventListener("click", function() {
    
    addToScore(this.value);
    checkPlayerScore();
  });

  crystal4.addEventListener("click", function() {
    
    addToScore(this.value);
    checkPlayerScore();
  });