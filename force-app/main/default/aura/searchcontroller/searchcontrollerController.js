({
	searchkeychange : function(component, event, helper) {
        var myEvent=$A.get("searchkeychange");
        myEvent.setParams({"searchText":event.target.value});
        myEvent.fire();
	}
})