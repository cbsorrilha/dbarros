var menuController = require('./menuController.js')();
module.exports = function () {
	function loadEvents() {
		menuController.init();
	}
	return {
		init: function () {
			loadEvents();
		}
	}
}