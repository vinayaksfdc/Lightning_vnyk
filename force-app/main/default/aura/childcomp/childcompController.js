({
            fireComponentEvent : function(component, event, helper) {
                // Fetch the event 
               var carType = component.get("v.name");
                console.log(carType);
               var cmpEvent = component.getEvent("firstCall"); 
				 cmpEvent.setParams({"empName" : carType }); 
 			   cmpEvent.fire(); 
            }
		})