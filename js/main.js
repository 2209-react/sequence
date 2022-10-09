var frame = document.querySelector('section');
var mask = document.querySelector('aside');
var imgs = '';

//200개의 이미지를 동적으로 생성 후 변수에 할당
for (var i = 0; i < 200; i++) {
	imgs += '<img src="img/pic' + i + '.jpg">';
}
frame.innerHTML = imgs;
var imgDOM = frame.querySelectorAll('img');

//소스이미지가 로딩완료될때마다 카운트가 될 변수 추가
var count = 0;

//img dom에 적용된 소스이미지가 로딩완료될때마다 반복
imgDOM.forEach(function (img) {
	img.onload = function () {
		count++;

		//증가되는 카운트값을 다시 백분율로 변환
		var percent = parseInt((count / 200) * 100);
		mask.querySelector('span').innerText = percent;
		mask.querySelector('.bar').style.width = percent + '%';

		//백분율이 100에 도달하면
		if (percent === 100) {
			//마스크에 클래스off를 붙여서 사라지는 모션적용
			mask.classList.add('off');

			//해당 마스크의 transition시간인 2초 뒤에
			setTimeout(function () {
				//마스크 dom을 아예 제거
				mask.remove();
			}, 2000);
		}
	};
});

//마우스 무브시 마우스 포인터의 위치 순번의 이미지만 활성화
window.addEventListener('mousemove', function (e) {
	var wid = window.innerWidth;
	var percent = parseInt((e.pageX / wid) * 200);

	imgDOM.forEach(function (el) {
		el.style.display = 'none';
	});
	imgDOM[percent].style.display = 'block';
});
