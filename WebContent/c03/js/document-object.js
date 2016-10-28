var msg = '<p><b>페이지 제목: </b>' + document.title + '<br />';
	msg += '<b>페이지 주소: </b>' + document.URL + '<br />';
	msg += '<b>최종 수정일: </b>' + document.lastModified + '</p>';

//id 특성 값을 이용하여 페이지에서 요소 선택
var el = document.getElementById('footer');
//innerHTML 속성은 보안 위협에 주의.
el.innerHTML = msg;