var gameState=0;
var contestantCount;
var quiz;
var question;
var contestant;
var allContestantsInfo;

function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    quiz.updateState(1);
  }

  if(gameState === 1){
    background("Yellow");
    quiz.showResult();
  }
  
}
