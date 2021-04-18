class Question{
    constructor(){
        this.title = createElement('h1');
        this.name = createInput('Enter your name here...');
        this.answer = createInput('Enter Correct Option no...');
        this.button = createButton('Submit');

    }

    hide(){
        this.title.hide();
        this.name.hide();
        this.answer.hide();
        this.button.hide();
    }

    display(){
        
        this.title.html("My Quiz Game");
        this.title.position(350,20);

        var question = createElement('h4');
        question.html("Question : What starts and ends with the letter 'E',  but has only one letter?");
        question.position(200,80);

        var option1 = createElement('h4');
        option1.html("1: Everyone");
        option1.position(200,100);

        var option2 = createElement('h4');
        option2.html("2: Envelope");
        option2.position(200,120);

        var option3 = createElement('h4');
        option3.html("3: Estimate");
        option3.position(200,140);

        var option4 = createElement('h4');
        option4.html("4: Example");
        option4.position(200,160);

        this.name.position(200,220);

        this.answer.position(400,220);

        this.button.position(200,260);

        this.button.mousePressed(()=>{

            this.name.hide();
            this.answer.hide();
            this.button.hide();

            contestant.name = this.name.value();
            contestant.answer = this.answer.value();
            contestantCount++;

            contestant.index= contestantCount;

            contestant.update();
            contestant.updateContestantCount();

            var confirmation = createElement('h4');
            confirmation.html(contestant.name + " - Your answer has been submitted successfully");
            confirmation.position(200,220);
        })

        

    

    }
}