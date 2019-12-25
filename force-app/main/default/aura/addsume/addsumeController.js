({
	add : function(component, event, helper)
    {
		 var listofnumbers=[];
        for(var i=0;i<10;i++)
        {
            
            listofnumbers.push({value:i});   
            
        }  
        component.set("v.number",listofnumbers);
        
	}
})