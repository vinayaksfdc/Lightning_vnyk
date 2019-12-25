({
	invoke : function(component, event, helper) 
    {
		var salary=component.get("v.salary");
        console.log('Salary is '+salary);
        var exp=component.get("v.exp");
		console.log('Exp is '+exp);
        var bonus=0;
        if(exp>5){
            bonus=salary*0.30;
        }
        else
        {
            bonus=salary*0.10;
        }
        component.set("v.bonus", bonus);
        console.log("Bonus is"+bonus);
    }
})