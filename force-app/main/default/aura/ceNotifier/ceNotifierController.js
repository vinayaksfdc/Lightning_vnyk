({
            show : function(component, event, helper) {
                // Fetch the event 
                var evt =component.getEvent("firstCall");
                // set the attribute values 
                evt.setParams({"empName":"Satish Myla"});
                // fire the event
                evt.fire();
            }
		})