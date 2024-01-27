//gsap code
gsap.from("#box1",{
  scale:1.2,
  duration:1,
  delay:.5,
})
gsap.from("#box2",{

	rotate:360,
	duration:1,
	delay:1,
	scrollTrigger:{
		trigger:"#box2",
		scroller:"body",  // aikhane container ta dite hobe jetay sob page gulo ase
// body dile kaj korbe na
		scrub:2,
		start: "top 50%",
		end: "top 30%"
	}
})