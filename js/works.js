works_animation_and_carusel = {
	works_link_array: Array.prototype.slice.call(document.getElementsByClassName('work-link')),
	slider_delay: 0,
	put_animation_and_carusel : function () {
		
		var that = this; // js design bug workaround.

		this.works_link_array.forEach(function(current, index, array) {

			var current_about_work = current.getElementsByClassName('about-work')[0];
			var slider_container = current.getElementsByClassName('carusel')[0];
			var amount_of_images = slider_container.children.length;
			var iterator = 0;
			var translate_percentage = 0;

			that.slider_delay += 0.3;

			slider_container.style.transitionDelay = that.slider_delay + 's';
			

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
	},

};

animation_delay_for_all_blocks = {
	main_array: Array.prototype.slice.call(document.getElementById('main').children),
	animation_delay: 0,
	animate: function () {

		that = this; // js design bug workaround.

		this.main_array.forEach(function(current, index, array){
			that.animation_delay += 0.5;
			current.style.animationDelay = that.animation_delay + 's';
		});
	},
};

works_animation_and_carusel.put_animation_and_carusel();
animation_delay_for_all_blocks.animate();