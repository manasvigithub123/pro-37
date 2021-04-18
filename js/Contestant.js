class Contestant{
    constructor(){
        this.name =null;
        this.answer = null;
        this.index= null;
    }

    getContestantCount(){
        var contestantCountRef = database.ref("contestantCount");
        contestantCountRef.on("value",function(data){
            contestantCount = data.val();
            console.log("contestant count in db " + contestantCount);
        })
    }

    update(){
        var contestantRef = database.ref("Contestants/contestant" + this.index);
        contestantRef.set({
            name : this.name,
            answer : this.answer
        })
    }

    updateContestantCount(){
        var contestantCountRef = database.ref("/");
        contestantCountRef.update({
            contestantCount : this.index
        })
    }

    static getcontestantInfo(){

        var contestantsRef = database.ref("Contestants");
        contestantsRef.on("value", function(data){
            allContestantsInfo = data.val();
        })
    }


}