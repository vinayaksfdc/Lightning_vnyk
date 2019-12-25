({
    doOrder :  function(component, event, helper) {
        var pageReference = component.find("navigation");
        var pageReferenceNav = {
            type: "standard__component",
            "attributes": {
                "componentName": "c__CreateBeerOrder"
            },
            "state": {
                "myAttr": "attrValue"
            }
        };
        pageReference.navigate(pageReferenceNav);
    },
    
    
    navigateUrl: function(component, event, helper) {
        var pageReference   = component.find("navigation");
        alert('pageReference is'+pageReference);
        var pageReferenceNav = {
            type: "standard__component",
            "attributes": {
                "componentName": "c__CreateBeerOrder" 
            },
            "state": { 
                "myAttr": "attrValue" 
            }
        };
        pageReference.navigate(pageReferenceNav);
         alert('pageReference2 is'+pageReference);
    },
    
})