//var supportsVibrate = “vibrate” in navigator;

var vibrateInterval;

function timingStopVibrate(duration, interval) {
	vibrateInterval = setInterval(function() {
	navigator.vibrate(duration);
	}, interval);
}

function stopVibrate() {
	if(vibrateInterval) clearInterval(vibrateInterval);
	navigator.vibrate(0);
}