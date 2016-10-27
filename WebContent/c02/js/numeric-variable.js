var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

//id 특성 값이 cost인 요소에 전체 금액을 출력한다.
var el = document.getElementById('cost');
el.textContent = '$' + total;