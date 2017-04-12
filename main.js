// Create a new GitHub repository, named Flashcard-Generator or something similar. Clone this to your local drive.
// Create a BasicCard constructor. It should accept front and back arguments.
//add inquirer for prompts
//add fs to append text
var fs = require("fs");

var cardType = process.argv[2];
var first = process.argv[3];
var second = process.argv[4];


function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    var logCardTxt = "\nFront: " + front + " Back: " + back;
    fs.appendFile("basicCard.txt", logCardTxt);
    console.log("the front is: " + front);
    console.log("The Back is: " + back);
};
// Create a ClozeCard constructor. It should accept text and cloze arguments.
function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.clozedDeleted = cloze;
    this.partial = function() {
        if (text.includes(cloze)) {
            text = text.replace(this.cloze, "....");
            return text;
        }
    }
    this.fullText = text;
    var logTxt = "\nText: " + text + " Cloze: " + cloze +
        " partial: " + this.partial();
    fs.appendFile("clozeCard.txt", logTxt);



};

//var newCardCreator = new CardCreator();
if (cardType === "Basic Card") {

    new BasicCard(first, second);

} else {

    new ClozeCard(first, second);

}

// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");
// //console.log(firstPresident.front);
// //console.log(firstPresident.back);

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");
// console.log(firstPresidentCloze.cloze);
// console.log(firstPresidentCloze.partial());




// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
// ClozeCard should have a property or method that contains or returns only the partial text.
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.
// As your application will not have a front end, your only need to determine an efficient way to store cloze-deleted cards—you don't have to solve the problem of displaying them. 
//You are free to decide how you'd like to implement this. One might represent the above flashcard thus:
// The bulk of this assignment is implementing ClozeCard. If you build a robust ClozeCard implementation, feel free to try your hand at implementing a front-end, as well.