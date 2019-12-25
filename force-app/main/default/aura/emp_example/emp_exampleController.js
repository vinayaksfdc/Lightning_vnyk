({
	invoke : function(component, event, helper)
    {
		var sal=component.get("v.sal");
       		  component.set("v.sal",+sal); 
        var exp=component.get("v.exp");	
         	  component.set("v.exp",+exp); 
        if(exp>5){
            bonus=sal*0.30;
        }
        else
        {
            bonus=sal*0.10;
        }
           
 	            component.set("v.bonus",+bonus);                   
 		
        console.log(bonus);
      
         
	}
})