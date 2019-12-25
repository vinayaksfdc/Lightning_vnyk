({
	doInit : function(component, event, helper) {
		var  PageRef = component.get("v.pageReference");
        if(PageRef){
            var state = PageRef.state;
            component.set("v.orderId", state.orderId);
            component.find('recordviewer').reloadRecord();
        }
         
        
	}
})