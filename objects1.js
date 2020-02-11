const fitBitData = {
    totalSteps          : 308000,
    totalMiles          : 211.7,
    avgCalorieBurn      : 5755,
    workoutsThisWeek    : "5 of 7",
    avgGoodSleep        : "2:3",
    45                  : "forty-five",
    "16"                : "sixteen",
    "13 Songs"          : "alle Songs"
};

console.log(fitBitData);

// die Abfrage über .identifier funzt nur wenn es eine gütltiger string identifier ist
// .45 geht nicht, deshalb besser abfrage über object[key]

console.log(fitBitData.totalMiles);

console.log(fitBitData[45]);

// keys(der name der Daten z.B. totalSteps == Identifier (wie variablen)) werden als string gespeichert, 
// auch keys die ints sind,
// aber die Abfrage in [] funktioniert auch mit strings, siehe 16

console.log(fitBitData[16]);

// keys lassen sich als string auch in mischform abfragen (z.B. 13 songs)

console.log(fitBitData["13 Songs"]);

const palette = {
    blue        : "#30336b",
    red         : "#eb4d4b",
    yellow      : "#f9ca24"
};

console.log(palette);

console.log(palette["blue"]);

// fun fact: palette["bl"+"ue"] funzt auch

// Einsatz von Variablen lassen sich mit Objekten verknüpfen: z.B. der User 
// kann seine Liebelingsarbe eingeben und unser Objekt checkt den entsprechenden 
// Farbcode (vorausgesetzt die Userfarbe entspricht einem key), like so:

let mysteryColor = "yellow";

console.log(mysteryColor);

// update data in object am beispiel eines leeren Objekt das iw rbefüllen wollen:

const userReview = {};

userReview["TypeO"] = 5.0;

console.log(userReview);

// nun ist das object mit neuen daten befüllt: TypeO: 5.0,
// geht auch mit updates oder operaters:

userReview["TypeO"]++;
console.log(userReview["TypeO"])
// UserReview von TypeO um  erhöht

// oder neuer User review mit operatern:

userReview["Jim"] = 5*2;
console.log(userReview);
