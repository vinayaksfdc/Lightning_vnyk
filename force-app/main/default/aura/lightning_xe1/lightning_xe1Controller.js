({
            showMe : function(component, event, helper) {
                var abc=component.get("c.callMe");  // callMe is method from apex class.
                abc.setCallback(this,function(response){
                    // Get the state of the response
                    var state =response.getState();
                    // We are comparing with states of the actions we have use " = = = "
                    if(state ==='SUCCESS'){
                        // If the state is success then get the return value
                        var result=response.getReturnValue();
                        component.set("v.result",result);
                        console.log("Result:"+result);
                    }else{
                        console.log('State failed');
                    }
                });
                $A.enqueueAction(abc); // We are adding the action to the queue
            }
		})