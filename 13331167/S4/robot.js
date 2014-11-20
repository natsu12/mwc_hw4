function robot(randomList, index, aBubbles) {
	var oBar = document.getElementById('info-bar');
	if (index < aBubbles.length) {
		clickOnBubble(aBubbles[randomList[index]], aBubbles);
		var that = aBubbles[randomList[index]];
		ajax('http://localhost:3000', function(number) {
			if (that.state == 'unclicked') {
				return;
			}
			showNumber(that, number);
			changeState(aBubbles);
			allNumbersGot(aBubbles);
			robot(randomList, index+1, aBubbles);
		});
	} else {
		addUp(oBar, aBubbles);
	}
}