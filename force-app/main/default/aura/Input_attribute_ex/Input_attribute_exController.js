({
	myAction : function(component, event, helper) {
		var aval=component.get("v.aval");
        var bval=component.get("v.bval");
		var result=aval+bval;
    component.set("v.cval",result);
        console.log('AVAL:'+aval);
        console.log('BVAL:'+bval);
        
    
    }
})