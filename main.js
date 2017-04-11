// Create a new GitHub repository, named Flashcard-Generator or something similar. Clone this to your local drive.
// Create a BasicCard constructor. It should accept front and back arguments.
function BasicCard(front,back) {
  this.front = front;
  this.back = back;
}
// Create a ClozeCard constructor. It should accept text and cloze arguments.
function ClozeCard(text,cloze) {
  this.text = text;
  this.cloze = cloze;
  this.clozedDeleted =function(){}
  this.partial = function(){
  	text= text.replace(cloze,"...."); 
  	console.log(text);
  }
  this.fullText = function(){}
}

 var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
 //console.log(firstPresident.front);
// console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial);


// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
// ClozeCard should have a property or method that contains or returns only the partial text.
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.
// As your application will not have a front end, your only need to determine an efficient way to store cloze-deleted cards—you don't have to solve the problem of displaying them. 
//You are free to decide how you'd like to implement this. One might represent the above flashcard thus:
// The bulk of this assignment is implementing ClozeCard. If you build a robust ClozeCard implementation, feel free to try your hand at implementing a front-end, as well.