$(document).ready(function(){
  $("form#counterForm").submit(function(event) {
    event.preventDefault();
    var array = [];
    var countTo = parseInt($("#inputCountTo").val());
    var countBy = parseInt($("#inputCountBy").val());
    total = 0;
    for(var currentNumber = 0 ; currentNumber <= countTo; currentNumber += countBy) {
      array.push(currentNumber);
    };
      array.forEach(function(number){
      $("ul#output").append("<li>"+number+"</li>");

    });

  });

});
