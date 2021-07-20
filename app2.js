const tl = gsap.timeline({default: { ease: "power1.out" }})
tl.fromTo('.start', {opacity: 0}, { opacity: 1, delay: 8, duration: 2});