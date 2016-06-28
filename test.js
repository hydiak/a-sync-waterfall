"use strict";
const waterfall = require('./index');

var tasks = [
	function(cb) {
		console.log(1);
		cb(null);
	},
	function(cb){
		console.log(2);
		cb(null);
	},
	function(cb){
		console.log(3);
		cb(null);
	},
	function(cb){
		console.log(4);
		cb(null);
	},
	function(cb){
		console.log(5);
		cb(null);
	}
];

var done = function(){
	console.log('done');
}

var testSync = function(){
	waterfall(tasks, done, true);
	console.log('this after waterfall');

};

var testAsync = function(){
	waterfall(tasks, done);
	console.log('this before waterfall');
};

console.log('testSync: \n');
testSync();

console.log('\ntestAsync: ');
testAsync();