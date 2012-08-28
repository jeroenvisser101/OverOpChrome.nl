/*--- CODEKIT INCLUDES ----
Mandatory for system:
	@codekit-prepend "../libs/jquery/jquery.js", "../libs/i18next/i18n.js", "../libs/format/format.js"

Bootstrap prepends:
	@codekit-prepend "../libs/bootstrap/js/bootstrap-transition.js", "../libs/bootstrap/js/bootstrap-tooltip.js", "../libs/bootstrap/js/bootstrap-affix.js", "../libs/bootstrap/js/bootstrap-alert.js", "../libs/bootstrap/js/bootstrap-button.js", "../libs/bootstrap/js/bootstrap-carousel.js", "../libs/bootstrap/js/bootstrap-collapse.js", "../libs/bootstrap/js/bootstrap-dropdown.js", "../libs/bootstrap/js/bootstrap-modal.js", "../libs/bootstrap/js/bootstrap-popover.js", "../libs/bootstrap/js/bootstrap-scrollspy.js", "../libs/bootstrap/js/bootstrap-tab.js", "../libs/bootstrap/js/bootstrap-typeahead.js"

Custom prepends:
	@codekit-prepend "../js/custom-file.js"
*/
$.i18n.init({
	lng: 'nl-NL',
	resGetPath: 'locales/__lng__/__ns__.json',
}, function() {
	$(document).i18n();
});

/* Disclaimer:
This counter is based on the magic number "5.0735667174" wich is the amount of new users added every second */
var updateTimer = function (){
	var epoch = (new Date).getTime() / 1000;
	var usersPerSecond = parseFloat(5.0735667174);
	var users = 320000000;
	var userDate = (new Date(2012, 4, 27)).getTime() / 1000;

	// Calculate the number of seconds between now and the last update date for the usercount
	var seconds = epoch - userDate;

	// Calculate the numer of users:
	var currentUsers = users + Math.floor(seconds * usersPerSecond);
	$('.chrome-user-count').text(currentUsers.format('0.000').toString());

	// Set new timeout
	setTimeout(updateTimer, 1000);
	return currentUsers;
};
updateTimer();

// OS dependable header:
(function ($){
	var currentOS = navigator.appVersion;
	if(currentOS.indexOf("Win") !== -1){
		$('.browser-default').removeClass('browser-default').addClass('browser-win');
	} else if(currentOS.indexOf("Win") !== -1){
		$('.browser-default').removeClass('browser-default').addClass('browser-linux');
	}
})($);

// Fancy chrome logo animation:
$(document).ready(function (){
	$('.chrome-logo-animated').click(function (){
		$this = $(this);
		setTimeout(function (){
			$(this.$this).css({
				'left': 0
			}).removeClass('rapid-rotate').hide().addClass('back');
		}, 2000);
		setTimeout(function (){
			$(this.$this).fadeIn(750, function (){
				$(this).removeClass('back');
			});
		}, 3500);
		$(this).addClass('rapid-rotate')
			   .css('left', $(document).width());
	});
});