({
            show : function(component, event, helper) {
              
             
                
                
                component.set("v.empName","Raj");
                component.set("v.salary",50000);
                component.set("v.bonus",1000);
                var bonus=component.get("v.bonus");
                var name=component.get("v.empName");
                var salary=component.get("v.salary");
                console.log("v.bonus",bonus);
                console.log('this is name',name);
                console.log('this is salary',salary);
			}
		})