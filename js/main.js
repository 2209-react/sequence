var frame = document.querySelector('section');
var imgs = '';

for (var i = 0; i < 200; i++) {
	imgs += '<img src="img/pic' + i + '.jpg">';
}
frame.innerHTML = imgs;

var imgDOM = frame.querySelectorAll('img');

//마우스무브시 브라우저상의 가로축 좌표값을 구하기
window.addEventListener('mousemove', function (e) {
	//이백분율 구하는 공식
	// (현재값/전체값) * 200
	var wid = window.innerWidth;
	var percent = parseInt((e.pageX / wid) * 200);

	//모든 이미지를 반복돌며 모두 비활성화 (초기화)
	imgDOM.forEach(function (el, idx) {
		el.style.display = 'none';
	});
	//현재 마우스 포인터 좌표값 순번에 맞는 이미지만 활성화
	imgDOM[percent].style.display = 'block';
});
