var title;
var message;
title = "웹지니의 특별한 제안";
message = '<a href=\"sale.html\">25% 할인!</a>'
	
var elTitle = document.getElementById('title');
elTitle.textContent = title;
var elNote = document.getElementById('note');
elNote.innerHTML = message;
//페이지에 HTML을 추가하기 위해 쓴 innerHTML.(특정 상황에서 보안이슈를 유발 할 수 있다.)