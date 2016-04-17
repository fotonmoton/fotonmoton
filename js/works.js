var works_link_array = document.getElementsByClassName('work-link');
works_link_array = Array.prototype.slice.call(works_link_array);

var slider_delay = 0;

works_link_array.forEach(function(current, index, array) {

	var current_about_work = current.getElementsByClassName('about-work')[0];
	var slider_container = current.getElementsByClassName('carusel')[0];
	var amount_of_images = slider_container.children.length;
	var iterator = 0;
	var translate_percentage = 0;

	slider_delay += 0.3;
	slider_container.style.transitionDelay = slider_delay + 's';

	function slide() {
		iterator += 1;
		
		if(iterator < amount_of_images) {
			translate_percentage -= 100;
			slider_container.style.transform = "translateX(" + translate_percentage + "%)";
		} else if (iterator == amount_of_images) {
			iterator = 0;
			translate_percentage += 100 * (amount_of_images - 1);
			slider_container.style.transform = "translateX(" + translate_percentage + "%)";
		}
	}

	function timeout() {
		setTimeout(function() {
			slide();
			timeout();
		}, 3000);
	}

	timeout();
		

	current.onmouseover = function () {
		current.style.boxShadow = '10px 10px 18px -8px black';
		current_about_work.style.opacity = 1;
	};

	current.onmouseout = function () {
		current.style.boxShadow = '';
		current_about_work.style.opacity = 0;
	};
});


var main_array = document.getElementById('main').children;
main_array = Array.prototype.slice.call(main_array);
var animation_delay = 0;

main_array.forEach(function(current, index, array){
	animation_delay += 0.5;
	current.style.animationDelay = animation_delay + 's';
});