({
	invoke : function(component, event, helper) {
        	var lname=component.find("lname").get("v.value");
        	var fname=component.find("fname").get("v.value");
        
			var action=component.get("c.callMe");
        
        	action.setParams({"lastname":lname,"firstname":fname});
        	action.setCallback(this,function(response){
            var state=response.getState();
            if(state === 'SUCCESS')
            {
                var result=response.getReturnValue();
                component.set("v.empName",result);
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