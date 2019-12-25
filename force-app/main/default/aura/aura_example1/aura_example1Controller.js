({
	showMe : function(component, event, helper) {
            var abc=component.get("c.callme");
         	 abc.setCallback(this,function(response){
			 var state=response.getState();	
                 if(state === 'SUCCESS')
            {
                var result=response.getReturnValue();
                component.set("v.result",result);
                console.log("Result:" +result);
            }
            else{
                console.log('State failed');
            }
            
        });
        
        $A.enqueueAction(abc);
	}
})