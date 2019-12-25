({
	invoke : function(component, event, helper) {
        	 
        	var fname=component.find("fname").get("v.value");
        
			var action=component.get("c.callMe");
        
        	action.setParams({"accname":fname});
        	action.setCallback(this,function(response){
            var state=response.getState();
            if(state === 'SUCCESS')
            {
                var result=response.getReturnValue();
                var myJSON = JSON.stringify(result);
				//alert(myJSON);
                       console.log(myJSON);
                component.set("v.acclist",myJSON);
                var accl=component.get("v.acclist");
                alert(accl);
                console.log(result);
            }
            else
            {
                console.log('State failed');
            }   
            
            
        });
        
        $A.enqueueAction(action);
        
	}
})