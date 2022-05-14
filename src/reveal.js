
import { gsap, Expo } from "gsap";
import $ from 'jquery'
import ScrollMagic from "scrollmagic";
import './animation.gsap';

const revealText = function () {
		const controller = new ScrollMagic.Controller();

		$('.gsap-reveal-hero').each(function() {
			const html = $(this).html();
			$(this).html('<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">'+html+'</span></span>');
		});
		const grevealhero = $('.gsap-reveal-hero');

		if ( grevealhero.length ) {
			let heroNum = 0;
			grevealhero.each(function() {

				const cover = $(this).find('.cover'),
				revealContent = $(this).find('.reveal-content');

				const tl2 = new gsap.timeline();

				setTimeout(function() {

					tl2
					.to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
						tl2.set(revealContent, { x: 0 });
						tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
					} } )
				}, heroNum * 0 );

				 new ScrollMagic.Scene({
					triggerElement: this,
					duration: "0%",
					reverse: false,
					offset: "-300%",
                 })
				.setTween(tl2)
				.addTo(controller);

				heroNum++;
			});
		}
}
    
revealText();