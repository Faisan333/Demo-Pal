document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const pinContainer = document.querySelector('.masking-section');
  const image1 = document.querySelector('.image-1');
  const image2 = document.querySelector('.image-2');
  const image3 = document.querySelector('.image-3');
  const image4 = document.querySelector('.image-4');
  const image5 = document.querySelector('.image-5');
  const image6 = document.querySelector('.image-6');
  const brand = document.querySelector('.brand-mask');
  const helper = document.querySelector('.overlay-content__helper');
  const video = document.querySelector('.overlay-video');

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const timeline = gsap.timeline();

      // Animate images flying out
      timeline
        .to(image3, { yPercent: -15, scale: 2 }, 0)
        .to(image4, { yPercent: 45, scale: 2 }, 0.5)
        .to(image2, { xPercent: 200, yPercent: -15, scale: 1.7 }, 1)
        .to(image5, { xPercent: -200, yPercent: -30, scale: 1.7 }, 1)
        .to(image1, { xPercent: -200, yPercent: -15, scale: 1.7 }, 2)
        .to(image6, { xPercent: 200, yPercent: -30, scale: 1.7 }, 2);

      // Animate the brand mask scaling up
      timeline
        .fromTo(brand, { scale: 1, yPercent: -60 }, {
          yPercent: -50,
          xPercent: 150,
          scale: 1100,
          duration: 5,
          ease: 'power3.inOut',
        }, 3)
        .to(brand, {
          backgroundColor: 'white',
          color: 'black',
          duration: 0,
        }, 3.7);

      // Animate the helper fading out
      timeline.to(helper, {
        opacity: 0,
        zIndex: 0,
        yPercent: 300,
        duration: 0.6,
        ease: 'power3.inOut',
      }, 3.1);

      // Animate the video fading in
      timeline.fromTo(video, { opacity: 0, scale: 1.1 }, {
        opacity: 1,
        duration: 0.2,
        scale: 1.1,
        ease: 'power3.inOut',
      }, 3.7);

      // Animate images flying out completely at the end
      timeline
        .to(image1, { xPercent: -500, yPercent: 150, scale: 1.7 }, 3.5)
        .to(image2, { xPercent: 500, yPercent: 150, scale: 1.7 }, 3.5)
        .to(image3, { yPercent: -500, scale: 2 }, 3.5)
        .to(image4, { yPercent: 500, scale: 2 }, 3.5)
        .to(image5, { xPercent: -500, yPercent: -300, scale: 1.7 }, 3.5)
        .to(image6, { xPercent: 500, yPercent: -300, scale: 1.7 }, 3.5);

      // --- 4. Create the ScrollTrigger to control the timeline ---
      ScrollTrigger.create({
        trigger: pinContainer,
        pin: true, 
        start: 'top top',
        end: '+=300%', 
        scrub: 1,
        animation: timeline,
      });
    });
  }, pinContainer);
});