//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
//business logic

var pizzaSizes = [
  { "name":"personal",
    "size":4,
    "price":2.99 },
  { "name":"mini",
    "size":6,
    "price":4.99 },
  { "name":"small",
    "size":8,
    "price":5.99 },
  { "name":"medium",
    "size":10,
    "price":8.99 },
  { "name":"large",
    "size":12,
    "price":10.99 },
  { "name":"xlarge",
    "size":16,
    "price":15.99 },
  { "name":"colossal",
    "size":36,
    "price":32.99 }
];
/*
function Toppings() {
  "peperoni":[.99],
  "sausage":[.99],
  "bacon":[.99],
  "canadian":[.99],
  "steak":[2.99],
  "chicken":[1.99],
  "cheese":[0],
  "xtra":[.49],
  "asiago":[2.99],
  "feta":[2.99],
  "nacho":[.99],
  "jalepeno":[.49],
  "olives":[.49],
  "pepper":[.49],
  "redpepper":[.49],
  "onions":[.49],
  "tomatoes":[.49],
  "mushrooms":[.49],
  "anchovies":[.49]
}
*/

//user interface logic
$("#addToOrder").click(function(event) {
  event.preventDefault();
  var pizzaSize = $("input:checked").val();
  var yourSize = 0;
  var yourPrice = 0;
  pizzaSizes.forEach(function(pizza){
    if(pizza.name===pizzaSize) {
      yourSize=pizza.size;
      yourPrice=pizza.price;
    }
  });
  //alert(pizzaSizes.pizzaSize);
  $("#yourOrder").append("<li>" + yourSize + "\" " + pizzaSize.toUpperCase() +  ": $" + yourPrice + "</li>");
});
