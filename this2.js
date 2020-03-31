const autoIdiot = {
    idiotien: ["The earth is flat", "God exists", "Vaccines kill", "Corona is a hoax", "Climate change is a lie"],
    pickPhrase(){
        idiotMax = this.idiotien.length;
        rnd = Math.floor(Math.random() * Math.floor(idiotMax));   
        return this.idiotien[rnd];    
    },
    start(){
       this.intervalID = setInterval(() => {console.log(this.pickPhrase())}, 3000);        
    },
    end(){
        clearInterval(this.intervalID);
        console.log("End this shit!");
    }
}