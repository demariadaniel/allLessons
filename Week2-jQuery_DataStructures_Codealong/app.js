$(document).ready(function() {
  var fruits = ['kiwi strawberry', 'banana', 'apples', 'avocado'];

  var currentItem = {
    name: 'Celery',
    price: 3,
    category: "vegetables",
    origin: ['Ontario','Local Farm', 'Organic'],
    manufacturer: {
      company: 'Rowe Farms'
    }
  }

  // Shopping List
  $("#a > p").text(fruits[0]);

  $("#b > p").text(fruits[ fruits.length-1 ]);

  $("#c > p").text("Total number of fruits: " + fruits.length);
  // Current Item
  $("#d > p").text(currentItem.name);

  $("#e > p").text(currentItem.price);

  $("#f > p").text(currentItem.category);

  $("#g > p").text(currentItem.origin[0]);

  $("#h > p").text(currentItem.manufacturer.company);
  // Expensive?
  var isExpensive;

  if(currentItem.price > 10){
    isExpensive = true;
    $("#i > p").addClass('true')
  } else {
    isExpensive = false;
    $("#i > p").addClass('false')
  }
  
  $("#i > p").text("Expensive: " + isExpensive);
});
