var sentence = prompt("Enter a sentence!");
console.log(sentence);

var firstLast = function(sentence){
  return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length -1).toUpperCase();
};


var reverse = function(x){
  return x.charAt(1) + x.charAt(0);
};

var letterReverse = function(sentence){
  return sentence + reverse(firstLast(sentence));

};

var addMiddle = function(sentence){
  return sentence.charAt(Math.floor(sentence.length/2)) + letterReverse(sentence);
};

console.log(addMiddle(sentence));

var sentenceReverse = function(sentence){
  var newsentence = "";
  for(var i=sentence.length;i >= 0;i--){
    newsentence += sentence.charAt(i);
  }
  return newsentence;
}

console.log(sentenceReverse(addMiddle(sentence)));
