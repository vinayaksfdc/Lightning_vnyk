({
            invoke : function(component, event, helper) {
                var acc=event.getParam("accName");
                component.set("v.val1",acc);
            }
		})