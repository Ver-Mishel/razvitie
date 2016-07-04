$(function () {

	'use strict';

	// Console test
	console.log('scripts/common.js connected');

	// Slider main-reviews
	$('.block-reviews__slider').each(
		function () {
			var slider = $(this),
				list = slider.find('.block-reviews__slider__body > div').css({ position: 'relative' }),
				flag = false,
				duration = 200;
			slider.find('.block-reviews__slider__arrows').click(function () {
				if (!flag) {
					flag = true;
					var items = list.find('> div');
					var item;
					if ($(this).hasClass('right')) {
						list.append(items.first().clone(true)).animate({ left: (-1 * items.first().width()) + 'px' }, duration, function () {
							flag = false;
							items.first().remove();
							list.css({ left: 0 });
						});
						item = list.find('.block-reviews__slider__body__item').eq(1);
					} else {
						list
							.css({ left: (-1 * items.first().width()) + 'px' })
							.prepend(items.last().clone(true))
							.animate({ left: 0 }, duration, function () {
								flag = false;
								items.last().remove();
							});
						item = list.find('.block-reviews__slider__body__item').eq(0);
					}
				}
			});
		}
	);

	// Animate url
	$('.go-top').click(function () {
		var related = $('#' + this.href.split('#')[1]);
		if (related.size()) {
			$('html, body').animate({ scrollTop: related.offset().top + 'px' }, 500);
			return false;
		}
	});
});




