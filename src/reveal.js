
import { gsap, Expo } from "gsap";
import $ from 'jquery'
import ScrollMagic from "scrollmagic";
import './animation.gsap';

const revealText = function () {
		const controller = new ScrollMagic.Controller();

		$('.gsap-reveal-text').each(function() {
			const html = $(this).html();
			$(this).html('<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">'+html+'</span></span>');
		});
		const grevealText = $('.gsap-reveal-text');

		if ( grevealText.length ) {
			let textNum = 0;
			grevealText.each(function() {

				const cover = $(this).find('.cover'),
				revealContent = $(this).find('.reveal-content');

				const timeline = new gsap.timeline();

				setTimeout(function() {

					timeline
					.to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
						timeline.set(revealContent, { x: 0 });
						timeline.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
					} } )
				}, textNum * 0 );

				 new ScrollMagic.Scene({
					triggerElement: this,
					duration: "0%",
					reverse: false,
					offset: "-300%",
                 })
				.setTween(timeline)
				.addTo(controller);

				textNum++;
			});
		}
}
    
revealText();