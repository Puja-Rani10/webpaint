
   new WOW().init(); 

  $(document).ready(function(){
  	
     
     $('#diagram-id-1').circleDiagram();

	$('#diagram-id-2').circleDiagram({
		"percent": "80%",
		"size": "200",
		"borderWidth": "7",
		"bgFill": "#e2e2e2",
		"frFill": "#06c",
		"textSize": "56",
		"textColor": "#585858"
	});
	 $('#diagram-id-3').circleDiagram();

}); 