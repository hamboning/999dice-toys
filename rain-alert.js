// ==UserScript==
// @name          999dice rain alert
// @namespace     www.999dice.com
// should work with script/tamper/violent monkeys, other userscript tools


	var audio = {};
	audio["alert"] = new Audio();
	audio["alert"].src = "no audio link for now";

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
