var Network = require('./network.js');
var lift = require('./lift.js');

module.exports = {
	Network: Network,
	lift: lift
};

// Include everything from composition
var composition = require('./composition.js');
for (var prop in composition) {
	module.exports[prop] = composition[prop];
}

// Networks
var lifted = require('./networks/lifted.js');
var linear = require('./networks/linear.js');
var convolution = require('./networks/convolution.js');
var pooling = require('./networks/pooling.js');
var modules = [
	lifted, linear, convolution, pooling
];
for (var i = 0; i < modules.length; i++) {
	var m = modules[i];
	for (var prop in m) {
		module.exports[prop] = m[prop];
	}
}