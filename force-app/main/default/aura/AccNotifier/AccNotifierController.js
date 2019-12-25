({
    /* AccNotifierController */
    fireComponentEvent : function(cmp , event) {
        var cmpEvent = cmp.getEvent("cmpAccEvent");
        // Get the value from Component and set in Event
        cmpEvent.setParams( { "AccRecord" : cmp.get("v.newAccount") } );
        cmpEvent.fire();
    }
})