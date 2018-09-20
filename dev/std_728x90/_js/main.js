TweenLite.defaultEase = Power2.easeOut

function start() {
	const tl = new TimelineMax()

	tl.set('.frame1', {opacity:1})
	tl.add('hand_in', "+=3.5")
	
	tl.to("#hero", 1, {x:-37, y:-77, scale:.45}, "hand_in")
	tl.to("#hand", 1, {x:-87, y:-23, scale:.37}, "hand_in")	
	tl.to("#t1", 1, {opacity:0}, "hand_in")
	




	

	tl.add('on')
	
	tl.from("#t2", .5, {opacity:0}, 'on')
	tl.to("#bright", .1, {opacity:1}, "on")
	tl.to("#hand", .1, {x:-107, y:-23, scale:.38}, "on")
	


	tl.add('out', "+=3.7")
	tl.to("#t2", .5, {opacity:0}, 'out')

	tl.to("#hero", 1, {x:0, y:-5, scale:.29}, "out")
	tl.to("#hand", 1, {x:-108, y:47, scale:.3}, "out")
	tl.from("#t3", .5, {opacity:0})
	tl.from("#cta", .5, {opacity:0})

	// tl.from("#t1", .5, {opacity:0})


	// tl.add('f2', "+=2.6")
	// tl.set('.frame2', {opacity:1}, "f2")
	// tl.from("#bg", .2, {opacity:0})
	// tl.from("#t2", .5, {opacity:0},"+=.3")
	// tl.from("#logo", .5, {opacity:0},"+=.5")

	// tl.to("#t2", .3, {opacity:0}, "+=2")
	// tl.from("#t3", .5, {opacity:0})
	// tl.from("#cta", .5, {opacity:0})

	// tl.gotoAndPlay("zoom_out")


}

start()



module.exports = {};

