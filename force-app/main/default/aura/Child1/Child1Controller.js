({
            call : function(component, event, helper) {
                var name=component.get('v.name');
                console.log(name);
                var evt=$A.get("e.c:secondEvent");
                evt.setParams({"accName":name});
                evt.fire();
            }
		})