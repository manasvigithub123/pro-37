class Quiz{
    constructor(){


    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
            console.log("gameState in db " + gameState);
        })
    }

    updateState(state){
        var gameStateRef = database.ref("/"); 
        gameStateRef.update({
            gameState : state
        })
    }

    start(){

        if(gameState === 0){
            contestant = new Contestant();
            contestant.getContestantCount();

            question = new Question();
            question.display();
        }
    }

    showResult(){
        question.hide();

        fill("Black");
        textSize(30);
        text("Result of the Quiz",300,40);

        textSize(15);
        text("Note : Contestant who answered correctly are highlighted by green color", 200,220);

        Contestant.getcontestantInfo();

        if(allContestantsInfo !== undefined){
            var correctAns = "2";
            var position = 240;
            for(var contestant in allContestantsInfo){
                position +=20;
                if(correctAns === allContestantsInfo[contestant].answer){
                    fill("green");
                }else{
                    fill("red");
                }
                text(allContestantsInfo[contestant].name + " : " + allContestantsInfo[contestant].answer,250,position);
            }
        }

    }

    
}