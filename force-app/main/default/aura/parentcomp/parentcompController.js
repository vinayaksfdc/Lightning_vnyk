({
    invoke  : function(component, event, helper) {
        console.log("event received by CarSearchController.js");
        var message = event.getParam("empName"); 
        component.set("v.messageFromEvent", message); 
        console.log(name);
    }
})