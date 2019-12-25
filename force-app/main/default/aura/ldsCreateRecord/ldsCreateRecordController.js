({
	doInit : function(component, event, helper) {
		component.find("recordcreator").getNewRecord(
        'Beer__c',
            null,
            false,
            $A.getCallback(function(){
                var record=component.get("v.record");
              	var error=component.get("v.recordError");
                if(error || (record === null))
                {
                    console.log('error ',error);
                    
                } 
                    else{
                        console.log('Succesfully Created');
                        alert('Template Initaited');
                    }
            }) 
        
        );
        
	},
    handleClick:function(component,event,helper){
        component.find("v.record").saveRecord(function(saveResult){
            if(saveResult.state==="SUCCESS"|| saveResult.state==="DRAFT"){
                var showToast=$A.get('e.force:showToast');
                
            }
                else if(saveResult.state==="INCOMPLETE"){}
            
                            else if(saveResult.state==="Error"){
                                
                            }
                
        });
        
    }
})