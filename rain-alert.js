// ==UserScript==
// @name        999dice rain alert
// should work with script/tamper/violent monkeys, other userscript tools
// ==/UserScript==


if (location.hostname == 'www.999dice.com') {
	
	function soundz() {
		window.audio = {};
		audio["alert"] = new Audio();
		audio["alert"].src = "https://cdn.rawgit.com/hamboning/999dice-toys/master/codec.wav";
		window.audio["alert"].play();
		return false;
	} 
	
	$("#ChatTabChatContainer").bind("DOMSubtreeModified",function(){
		el = $(this);
	
		lastmsg = el.children().last('.ChatText').text();
		BtcRainButton = el.children().last('.ChatText').find('.TextButton').text();
	
		checkRain = (/BTC/i.test(BtcRainButton));
		soundtest = (/Ancient Psychic Tandem War Elephant/i.test(lastmsg));
		
		if (( checkRain ) || ( soundtest ))
			{ soundz(); }
	});	
}
