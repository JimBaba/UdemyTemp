let highScore = 1600;
let userScore = 1903;

if (userScore > highScore) {
    if (userScore % 2 !== 0) {
        console.log(`Congratz, you set the new ODD Highscore of 
        ${userScore} Points and beat the old Highscore by ${userScore - highScore} Points`)
    }
    else {
        console.log(`Congratz, you set the new EVEN Highscore of 
        ${userScore} Points and beat the old Highscore by ${userScore - highScore} Points`)
    }
}
else if (userScore < highScore) {
    console.log(`Hahahaha, you only got ${userScore} Points! The Highscore is ${highScore} Points`)
}
else {
    console.log(`The Highscore was ${highScore} Points and your score was ${userScore}, that is awkward.`)
}

let password = "hu t";

if(password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Password valid");
}
else if(password.length >= 6 && password.indexOf(" ") !== -1){
    console.log("No Spaces allowed");
}
else if (password.length < 6 && password.indexOf(" ") === -1) {
    console.log("You password is too short");
}
else {
    console.log("You need a password length of at least 6 and no spaces allowed");
}