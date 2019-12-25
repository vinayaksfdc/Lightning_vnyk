({
    handleCompEvent : function(component, event, helper) {
        var searchParam=event.getParam("searchText");
        console.log('searchParam1 is'+searchParam)
         var action=component.get("c.searchBeer");
          var searchParam=event.getParam("searchText");
         action.setParams({"searchParam" : searchParam});
       
        	action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS')
            {
                var result=response.getReturnValue();
                component.set("v.beerList",result); 
                console.log(response.getReturnValue());
               var res1=JSON.stringify(component.get("v.beerList"));
                console.log(res1);
            }
            else
            {
                console.log('State failed'+response.getError());
            } 
        });
        $A.enqueueAction(action);
        
    }
})