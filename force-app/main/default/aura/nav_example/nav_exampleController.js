({
    gotoRelatedList : function (component, event, helper) {
        var relatedListEvent = $A.get("e.force:navigateToRelatedList");
        relatedListEvent.setParams({
            "relatedListId": "Cases",
             
            "parentRecordId": component.get("v.recordId")
        });
        relatedListEvent.fire();
    },
    gotoRelatedListCon : function (component, event, helper) {
        var relatedListEvent = $A.get("e.force:navigateToRelatedList");
        relatedListEvent.setParams({
            "relatedListId": "Contacts",
             
            "parentRecordId": component.get("v.recordId")
        });
        relatedListEvent.fire();
    }, 
 
    gotoRelatedListOpp : function (component, event, helper) {
        var relatedListEvent = $A.get("e.force:navigateToRelatedList");
        relatedListEvent.setParams({
            "relatedListId": "Opportunities",
             
            "parentRecordId": component.get("v.recordId")
        });
        relatedListEvent.fire();
    },
    
    navigate : function(component, event, helper) {
        var nagigateLightning = component.find('navigate');
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'MyAccounts'
            } 
        };
        nagigateLightning.navigate(pageReference);
    },
    	NavigationRec : function(component, event, helper) {
		
        component.find("navId").navigate({
            type: 'standard__recordPage',
            attributes: {
                recordId : '5001r00001zYLMsAAO', // Hardcoded record id from given objectApiName
                actionName: 'view',  //Valid values include clone, edit, and view.
                objectApiName: 'Case' //The API name of the record’s object
            }}, true);
	
    }
    
    
})