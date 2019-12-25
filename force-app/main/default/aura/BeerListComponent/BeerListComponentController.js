({
	showinfo : function(component, event, helper) {
		var eventSource=event.getSource();
        var beerobj= eventSource.get('v.name');
        component.set('v.beerId',beerobj);
            $A.createComponent(
                "c:BeerDetails",
                               {
                                   "beerId":beerobj 
                               },
                               function(beerDetails, status, errorMessage){
                                   if(status==='SUCCESS')
                                   {
                                       component.find('overlayLib').showCustomModal({
                                           header: "BeerDetails",
                                           body: beerDetails,
                                           footer: 'Footer',	
                                           showCloseButton: true,
                                           closeCallback: function() {
                                               
                                           }
                                       });

                                        
                                   } 
                               });
	}
})