var links = document.getElementsByTagName("a");

var links = Array.prototype.slice.call(links);

links.forEach(function(current, index, array) {
	current.onclick = function (event) {
		event.preventDefault();

		setTimeout(function() {
			window.location = current.href;
		}, 300);

		document.body.style.animationName = 'disapear';
	};
});