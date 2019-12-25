({
	invoke : function(component, event, helper) {
        var action=component.get("c.callMe");
        action.setCallback(this,function(response){
        var state=response.getState();
            if(state ==='SUCCESS')
            {
                var result=response.getReturnValue();
                component.set("v.result",result);
                console.log('Result is: '+result);
                
            }
         else
             {
                console.log('state failed'); 
             }

    });
        
        $A.enqueueAction(action);
        
    }
})