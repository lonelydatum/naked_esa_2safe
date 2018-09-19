TweenLite.defaultEase = Power2.easeOut

function start() {
	const tl = new TimelineMax()

	tl.set('.frame1', {opacity:1})
	tl.add('hand_in', "+=1")
	tl.from("#hand", 1, {x:-290, y:97, scale:1}, "hand_in")
	tl.to("#hero", 1, {x:-150, y:-297, scale:1}, "hand_in")

	tl.add('switch_on', "+=.05")
	tl.to("#hand", .2, {x:-140, y:26, scale:1}, "switch_on")
	tl.to("#hero #bright", .01, {opacity:1}, "switch_on")

	tl.add('zoom_out', "+=.1")
	tl.to("#hero", 1.1, {x:0, y:0, scale:.5}, "zoom_out")
	tl.to("#hand", 1.1, {x:-121, y:132, scale:.57}, "zoom_out")


	tl.from("#t1", .5, {opacity:0})


	tl.add('f2', "+=2.6")
	tl.set('.frame2', {opacity:1}, "f2")
	tl.from("#bg", .2, {opacity:0})
	tl.from("#t2", .5, {opacity:0},"+=.3")
	tl.from("#logo", .5, {opacity:0},"+=.5")

	tl.to("#t2", .3, {opacity:0}, "+=2")
	tl.from("#t3", .5, {opacity:0})
	tl.from("#cta", .5, {opacity:0})

	// tl.gotoAndPlay("f2")


}

start()



module.exports = {};

