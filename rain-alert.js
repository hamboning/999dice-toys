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
		console.log(Date($.now()));
		return false;
<<<<<<< HEAD
=======
		
>>>>>>> master
	} 

	window['last_button'] = null;
	
	$("#ChatTabChatContainer").bind("DOMSubtreeModified",function(){
		el = $(this);
	
		lastmsg = el.children().last('.ChatText').text();
		var crtButton = el.children().last('.ChatText').find('.TextButton');
		BtcRainButton = crtButton.text();
	
		checkRain = (/BTC\/DOGE/i.test(BtcRainButton));
		checkRainx = (/BTC \/ DOGE/i.test(BtcRainButton));
		soundtest = (/Ancient Psychic Tandem War Elephant/i.test(lastmsg));
		
		if ((( checkRain ) || ( checkRainx ) || ( soundtest )) && (crtButton.get(0) != window['last_button']))
			{
				window['last_button'] = crtButton.get(0);
				soundz();
			}
	});	
	
}
