({
     /* AccHandlerCMPController.js */
    handleComponentEvent : function(cmp, event) {
        // Get value from Event
        var accRec = event.getParam("AccRecord");
        // Get the List of Existing Account ListOfAcc
        var ListOfAcc = cmp.get("v.AccListFromEvent");
        // Add Record in List
        ListOfAcc.push(accRec);
        // set the handler attributes based on event data
        cmp.set("v.AccListFromEvent", ListOfAcc);
    }
})