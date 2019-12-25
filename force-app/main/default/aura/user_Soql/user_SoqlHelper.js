({
               /*  invoke : function(component, event, helper) {
                var name=event.getParam("empName");
                component.set("v.myName",name);
                console.log(name);
            }
            */   
      show : function(component, event, helper) {
                // Fetch the event 
                var evt =component.getEvent("firstCall");
                // set the attribute values 
                var usrnme =component.get("empName");
          debugger;
                evt.setParams({"empName":usrnme});
                // fire the event
                evt.fire();
            }
            

		})