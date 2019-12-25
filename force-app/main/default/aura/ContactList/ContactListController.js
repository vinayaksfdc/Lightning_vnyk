({
    doInit : function(component, event, helper) {
        // create a one-time use instance of the serverEcho action
        // in the server-side controller
       var action = component.get("c.getcontactlist");
        action.setParams({ 
            conid : component.get("v.recordId")
        });

        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
               var responseval=response.getReturnValue();
				console.log('response.getReturnValue()'+responseval);
                component.set("v.contactlist",responseval);
                 
            }
             
            else if (state === "ERROR") {
                var errors = response.getError();
               
            }
        });

       
        $A.enqueueAction(action);
    }
})