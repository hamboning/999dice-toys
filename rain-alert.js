// ==UserScript==
// @name        999dice rain alert
// @include     http*://www.999dice.com
// should work with script/tamper/violent monkeys, other userscript tools
// ==/UserScript==

	var audio = {};
	audio["alert"] = new Audio();
	audio["alert"].src = "https://cdn.rawgit.com/hamboning/999dice-toys/master/codec.wav";

	function soundz() {
		audio["alert"].play();
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
