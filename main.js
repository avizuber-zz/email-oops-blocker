// All functions rely on Gmail's current structure and IDs (5/6/2015), which are likely to subject to change when Gmail updates their UI

$( document ).ready(function() {
	
	 function bccAlert(alertText) {
		
		var alertText;
		
		var lookForBcc = 'bcc';
		var lookHere = $('td.ady').text();

		var filter = new RegExp('\\b' + lookForBcc + '\\b', 'gi');

		if(lookHere.match(filter)) {
		  alert(alertText);
		};
	}

	// When a user clicks "Reply to all" from underneath the email 
	$( document ).on("click", "span:contains('Reply to all')", function(){
	  bccAlert( "You were Bcc'd on this email. Are you sure you want to Reply All?" );
	});
	
	// When a user clicks "Reply to all" from the dropdown menu
	$( document ).on("click", "div.J-N:contains('Reply to all')", function(){
	  bccAlert( "You were Bcc'd on this email. Are you sure you want to Reply All?" );
	});
	
	// When a user clicks "Forward" from underneath the email 
	$( document ).on("click", "span:contains('Forward')", function(){
	  bccAlert( "You were Bcc'd on this email. Are you sure you want to forward it?" );
	});
	
	// When a user clicks "Forward" from the dropdown menu
	$( document ).on("click", "div.J-N:contains('Forward')", function(){
	  bccAlert( "You were Bcc'd on this email. Are you sure you want to forward it?" );
	});
	
});
