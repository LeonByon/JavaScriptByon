/*이 스크립트는 현재 시간에 따라 사용자에게 다른 인사말을 출력한다.*/
var today = new Date();
var hourNow = today.getHours();
var greeting;

//현재 시간에 따라 적당한 인사말을 출력한다.
if (hourNow > 18){
	greeting = 'Good evening!';
}else if(hourNow > 12){
	greeting = 'Good afternoon!';
}else if(hourNow > 0){
	greeting = 'Good morning!';
}else{
	greeting ='Welcome!';
}

document.write('<h3>' + greeting + '</h3>');