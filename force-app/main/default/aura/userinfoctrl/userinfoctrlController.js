({
    doInit : function(component, event, helper) {
        helper.loadData(component, event);
    },
     invoke : function(component, event, helper) {
                var name=event.getParam("empName");
                component.set("v.myName",name);
                console.log(name);
            }
                   


})