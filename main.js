//add fs to append text
var fs = require("fs");

//setting node position to varibles 
var cardType = process.argv[2];
var first = process.argv[3];
var second = process.argv[4];

//basic card constructor with front and back arguments
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    //logging card to text file
    var logCardTxt = "\nFront: " + front + " Back: " + back;
    fs.appendFile("basicCard.txt", logCardTxt);
    console.log("the front is: " + front);
    console.log("The Back is: " + back);
};
// ClozeCard constructor with text and cloze arguments.
function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = function() {
        if (text.includes(cloze)) {
            text = text.replace(this.cloze, "....");
            return text;
        } else {
            console.log("What you want to cloze is not in the full statement!")
        }
    }

    //logging in a textfile
    var logTxt = "\nText: " + text + " Cloze: " + cloze +
        " partial: " + this.partial();
    fs.appendFile("clozeCard.txt", logTxt);



};
//determining what type of card it is. 
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