(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

TweenLite.defaultEase = Power2.easeOut;

function start() {
	var tl = new TimelineMax();

	tl.set('.frame1', { opacity: 1 });

	tl.to("#hand", .7, { x: -100, y: -14, scale: .47 }, .2);
	tl.from("#t1", .3, { opacity: 0 }, .2);

	tl.add('hand_in', "+=2.5");

	tl.to("#hero", 1, { x: -37, y: -77, scale: .45 }, "hand_in");
	tl.to("#hand", 1, { x: -89, y: -23, scale: .38 }, "hand_in");
	tl.to("#t1", .5, { opacity: 0 }, "hand_in");

	tl.add('on');
	tl.from("#t2", .5, { opacity: 0 }, 'on');
	tl.to("#bright", .1, { opacity: 1 }, "on");
	tl.to("#hand", .1, { x: -107, y: -23, scale: .38 }, "on");

	tl.add('zoom', "+=0");
	tl.to("#hand", .6, { x: -108, y: 47, scale: .3 }, "zoom");
	tl.to("#hero", .6, { x: -67, y: -17, scale: .55 }, "zoom");

	tl.add('out', "+=3.7");
	tl.to("#t2", .5, { opacity: 0 }, 'out');
	tl.to("#hero", .6, { x: 0, y: -5, scale: .29 }, "out");

	tl.from("#t3", .5, { opacity: 0 });
	tl.from("#cta", .5, { opacity: 0 });

	// tl.gotoAndPlay("on")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
