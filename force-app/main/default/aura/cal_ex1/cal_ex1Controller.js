({
	myAction : function(component, event, helper) {
		var aval=component.get('aval');
        var bval=component.get('bval');
        alert(parseInt(aval)+parseInt(bval));
	}
})