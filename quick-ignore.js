$('head').append('<style type="text/css">'+
	'.ChatUserID:hover { cursor: pointer; } '+
	'.ChatUserID-ignore { color: red; } '+
	'.ChatUserID-ignore:hover { cursor: pointer; }'+
	'</style>');

var nameCalling = new Array("fool", "ass-butt", "fucklet", "stepchild", "shitlord", "dingus", "mingebag", "dickwagon", "dicknugget", "wooden dildo", "pencildick", "ass-burglar", "Dr. Faggot", "Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Dunder", "Blixen", "Rudolph", "adolf");

$(document).on('click', '.ChatUserID', function () {
	if ($(this).hasClass('shows-ignore')){ 
		$('.toremove').remove(); $(this).removeClass('shows-ignore'); } else 
			{	$(this).addClass('shows-ignore'); 
				moron = nameCalling[Math.floor( Math.random() * nameCalling.length )];
				$(this).append('<span class="toremove">- <span class="ChatUserID-ignore">Ignore this '+ moron +'</span> </span>'); }
		}).on('click', '.ChatUserID-ignore', function () {
			parent = ($(this).closest('p'));
			$('#ChatTabText').val('/ignore ' + parent.attr('data-accountid'));
			$('#ChatTabSendButton').click();
});
