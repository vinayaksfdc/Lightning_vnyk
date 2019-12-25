({
	show : function(component,event,helper) {
        var num1=component.get("v.num1");
   	    var num2=component.get("v.num2");
       alert(parseInt(num1)+parseInt(num2));
	},
    show1 : function(component,event,helper) {
        
        var num1=component.get("v.num1");
   	    var num2=component.get("v.num2");
       alert(parseInt(num1)-parseInt(num2));
	},
    show2 : function(component,event,helper) {
      var num1=component.get("v.num1");
   	    var num2=component.get("v.num2");
        alert(parseInt(num1)*parseInt(num2));
	},
 show3 : function(component,event,helper) {
 			var num1=component.get("v.num1");
   	    var num2=component.get("v.num2");  
        alert(parseInt(num1)/parseInt(num2));
 }
})