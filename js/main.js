var frame = document.querySelector('section');

var imgs = '';

for (var i = 0; i < 200; i++) {
	imgs += '<img src="img/pic' + i + '.jpg">';
}

frame.innerHTML = imgs;
