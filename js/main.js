var frame = document.querySelector('section');
var imgs = '';

for (var i = 0; i < 200; i++) {
	imgs += '<img src="img/pic' + i + '.jpg">';
}
frame.innerHTML = imgs;

//마우스무브시 브라우저상의 가로축 좌표값을 구하기
window.addEventListener('mousemove', function (e) {
	//이백분율 구하는 공식
	// (현재값/전체값) * 200
	var wid = window.innerWidth;
	var percent = parseInt((e.pageX / wid) * 200);
	console.log(percent);
});
