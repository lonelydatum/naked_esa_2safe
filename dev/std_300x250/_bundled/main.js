(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

TweenLite.defaultEase = Power2.easeOut;

function start() {
	var tl = new TimelineMax();

	tl.set('.frame1', { opacity: 1 });
	tl.add('hand_in', "+=1");
	tl.from("#hand", 1, { x: -290, y: 97, scale: 1 }, "hand_in");
	tl.to("#hero", 1, { x: -150, y: -297 + 30, scale: 1 }, "hand_in");

	tl.add('switch_on', "+=.05");
	tl.to("#hand", .2, { x: -140, y: 26 + 30, scale: 1 }, "switch_on");
	tl.to("#hero #bright", .01, { opacity: 1 }, "switch_on");

	tl.add('zoom_out', "+=.1");
	tl.to("#hero", 1.1, { x: 0, y: 0, scale: .5 }, "zoom_out");
	tl.to("#hand", 1.1, { x: -121, y: 132, scale: .57 }, "zoom_out");

	tl.from("#t1", .5, { opacity: 0 });

	tl.add('f2', "+=2.6");
	tl.set('.frame2', { opacity: 1 }, "f2");
	tl.from("#bg", .2, { opacity: 0 });
	tl.from("#t2", .5, { opacity: 0 }, "+=.3");
	tl.from("#logo", .5, { opacity: 0 }, "+=.5");

	tl.to("#t2", .3, { opacity: 0 }, "+=2");
	tl.from("#t3", .5, { opacity: 0 });
	tl.from("#cta", .5, { opacity: 0 });

	// tl.gotoAndPlay("zoom_out")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
