 const items = [ {name: 'Bike', price:100}, 
  {name: 'TV', price:200}, 
  {name: 'Album', price:10}, 
  {name: 'Book', price:5}, 
  {name: 'Phone', price:500}, 
  {name: 'Computer', price:1000}
];

//Sub Question 1
const cheapest = items.reduce(
  (first, second) =>
    first.price < second.price
      ? first
      : second
);
console.log("Q1. Without money, I will Buy:");
console.log(cheapest.name+" with price of "+cheapest.price);

//Sub Question 2
const expensive = items.reduce(
  (first, second) =>
    first.price > second.price
      ? first
      : second
);
console.log("Q2. The expensive product is:");
console.log(expensive.name+" with price of "+expensive.price);

//Sub Question 3
var tot = 0;
items.forEach(total);
function total(item) {
    tot += item.price;
} 
document.write("Q3. The total price of all products is " + tot);

//Sub Question 4
var tot2 = 0;
items.forEach(otherTotal);
function otherTotal(item) {
    if(item.price >= 10){
        tot2 += item.price
    }
} 
document.write("Q4. The total without whose price is < 10 is "+tot2);
