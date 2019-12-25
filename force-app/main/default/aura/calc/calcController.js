({
	show : function(component, event, helper) {
        var aval=component.find("aval").get("v.value");
        var bval=component.find("bval").get("v.value");
        
        var cval=parseInt(aval)+parseInt(bval);
  		component.find("cval").set("v.value",cval);    
        
        console.log(aval);
        console.log(bval);
        console.log(cval);
        
		
	},
    show1 : function(component, event, helper) {
        var aval=component.find("aval").get("v.value");
        var bval=component.find("bval").get("v.value");
        
        var cval=parseInt(aval)-parseInt(bval);
  		component.find("cval").set("v.value",cval);    
        
        console.log(aval);
        console.log(bval);
        console.log(cval);
        
		
	},
        show2 : function(component, event, helper) {
        var aval=component.find("aval").get("v.value");
        var bval=component.find("bval").get("v.value");
        
        var cval=parseInt(aval)*parseInt(bval);
  		component.find("cval").set("v.value",cval);    
        
        console.log(aval);
        console.log(bval);
        console.log(cval);
        
		
	},
})