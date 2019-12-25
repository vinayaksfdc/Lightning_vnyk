({
	doInit : function(component, event) {
        var action = component.get("c.findall");
        action.setCallback(this, function(a) {
            component.set("v.contacts", a.getReturnValue());
        });
        $A.enqueueAction(action);
    },
    SearchKeyChange : function(component, event, helper) {
        var searchKey=event.getParam("searchKey"); 
        var action=component.get("c.findByName");
        action.setCallback(this,function(a)
        {
        component.set("v.contacts",a.getReturnValue())     
         });
         $A.enqueueAction(action);
	}
   
})