({
	invoke : function(component, event, helper) {
		var action=component.get("c.myData");
    action.setCallback(this,function(response){
    		var state=response.getState();
    		if(state==='SUCCESS')
    		{
    		component.set("v.optylist",response.getReturnValue());
			}
    		else
 			{
 				console.log('error');
 			}
    
    
		});
		$A.enqueueAction(action);
	}
})