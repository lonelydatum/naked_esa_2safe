(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

TweenLite.defaultEase = Power2.easeOut;

function start() {
	var tl = new TimelineMax();

	tl.set('.frame1', { opacity: 1 });
	tl.add('hand_in', "+=3.5");

	tl.to("#hero", 1, { x: -37, y: -77, scale: .45 }, "hand_in");
	tl.to("#hand", 1, { x: -87, y: -23, scale: .37 }, "hand_in");
	tl.to("#t1", 1, { opacity: 0 }, "hand_in");

	tl.add('on');

	tl.from("#t2", .5, { opacity: 0 }, 'on');
	tl.to("#bright", .1, { opacity: 1 }, "on");
	tl.to("#hand", .1, { x: -107, y: -23, scale: .38 }, "on");

	tl.add('out', "+=3.7");
	tl.to("#t2", .5, { opacity: 0 }, 'out');

	tl.to("#hero", 1, { x: 0, y: -5, scale: .29 }, "out");
	tl.to("#hand", 1, { x: -108, y: 47, scale: .3 }, "out");
	tl.from("#t3", .5, { opacity: 0 });
	tl.from("#cta", .5, { opacity: 0 });

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

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
