var subtotal = (13 + 1) * 5; //결과는 70
var shipping = 0.5 * (13 + 1); //결과는 7

var total = subtotal + shipping; //결과는 77

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;