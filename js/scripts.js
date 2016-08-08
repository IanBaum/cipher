var sentence = prompt("Enter a sentence!");
console.log(sentence);

var firstLast = function(sentence){
return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length -1).toUpperCase();
};

alert(firstLast(sentence));
