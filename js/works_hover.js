var works_array = document.getElementsByClassName('work-wrap');
var about_works_array = document.getElementsByClassName('about-work');

about_works_array= Array.prototype.slice.call(about_works_array);
works_array = Array.prototype.slice.call(works_array);

works_array.forEach(function(current, index, array) {

	var current_children = current.children;

	current.onmouseover = function () {
		current.style.boxShadow = '4px 4px 9px -5px rgba(0, 0, 0, 0.75)';
		current_children[1].style.opacity = 1;
	};

	current.onmouseout = function () {
		current.style.boxShadow = '';
		current_children[1].style.opacity = 0;
	};
});