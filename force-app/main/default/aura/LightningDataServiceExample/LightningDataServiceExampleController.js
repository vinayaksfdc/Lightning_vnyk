({
    handleSuccess : function(component, event, helper) {
        //  var r=JSON.stringify(event);
        var idcreated=event.getParam("id");
        component.set("v.recordId",idcreated);
        component.set("v.accRecord.AccountId",idcreated);

        // console.log(r);
         
         if (idcreated!=null) {
     		component.set('v.truthy','true');
			}
    },
    handleSuccesscont: function(component, event, helper) {
         //  var r=JSON.stringify(event);
        console.log('test is'+event.getParam("id"));
       //  console.log(r);
        
    }
})