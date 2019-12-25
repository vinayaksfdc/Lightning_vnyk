({
	invoke : function(component, event, helper) {
        
        var amt=component.get("v.amount");
        console.log(amt);
       	var  yrs=component.get("v.years");
        console.log(yrs);
        var rate=component.get("v.rate");
  		console.log(rate);
        
        var interest=(amt*yrs*rate)/100;
        component.set("v.interest",interest);
        console.log(interest);
	}
})