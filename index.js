var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1;

 var item_object = {
   itemName: item,
   itemPrice: price
 };

 cart.push(item_object);
 console.log (`${item} has been added to your cart.`);
}

addToCart(apples)
addToCart(bananas)
addToCart(carrots)
addToCart(daikon)

function viewCart() {
  var viewItems = [];

  if(cart.length===0) {
  console.log ("Your shopping cart is empty")

} else {

  for(i = 0; i < cart.length; i++) {
    var item_object = cart[i];
    var itemName = item_object.itemName;
    var itemPrice = item_object.itemPrice;

      if (cart.length===1) {
      viewItems.push(`${itemName} at $${itemPrice}.`);

    }
  }
}

viewCart();

function total() {
  var priceOfItems = [];

  for (i = 0; i < cart.length; i++)

}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
