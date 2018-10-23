$(document).ready(function(){
  $("form#counterForm").submit(function(event) {
    event.preventDefault();
    var array = [];
    console.log(array)
    var countTo = parseInt($("#inputCountTo").val());
    console.log("countTo: " + countTo)
    var countBy = parseInt($("#inputCountBy").val());
    total = 0;
    console.log("countBY: " + countBy)
    for(var currentNumber = 0 ; currentNumber <= countTo; currentNumber += countBy) {
      array.push(currentNumber);
    };
      array.forEach(function(number){
      $("ul#output").append("<li>"+number+"</li>");

    });

  });

});
