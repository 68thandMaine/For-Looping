var vowels = ["a","e","i","o","u"]

function replaceVowels(str) {
  var sentenceArray = str.split('');
  for(var i = 0; i < sentenceArray.length; i++) {
    if (vowels.indexOf(sentenceArray[i])>=0) {
      sentenceArray[i] = "-"
    }
  };
  console.log(sentenceArray);
  return sentenceArray.join('');
}


$(document).ready(function() {
  $("form#wordpuzzle").submit(function(event) {
    event.preventDefault();
var sentence1 = replaceVowels($("input#inputUser1").val());
$(".adjustedSentence").text(sentence1)
// var sentence2 = $("#inputUser2").val();
console.log(sentence1);

  });
});
