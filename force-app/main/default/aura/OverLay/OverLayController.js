({
    handleShowModal : function(component, event, helper) {
        component.find('overlayLib').showCustomModal({
            header: "Application Confirmation",
            body: 'This is Test',
            footer: 'Footer',	
            showCloseButton: true,
            closeCallback: function() {
                alert('You closed the alert!');
            }
        });
    },
    navigateUrl: function(component, event, helper) {
        var pageReference   = component.find("navigation");
        alert('pageReference is'+pageReference);
        var pageReferenceNav = {
            type: "standard__component",
            "attributes": {
                "componentName": "c__BeerExplorer" 
            },
            "state": { 
                "myAttr": "attrValue" 
            }
        };
        pageReference.navigate(pageReferenceNav);
         alert('pageReference2 is'+pageReference);
    },
     handleLoad: function(cmp, event, helper) {
        cmp.set('v.showSpinner', false);
    },

    handleSubmit: function(component, event, helper) {
        alert('Submit Handled');
    },

    handleError: function(cmp, event, helper) {
        // errors are handled by lightning:inputField and lightning:nessages
        // so this just hides the spinnet
        cmp.set('v.showSpinner', false);
    },

    handleSuccess: function(cmp, event, helper) {
        cmp.set('v.showSpinner', false);
        cmp.set('v.saved', true);
    },
    createButton: function(component, event, helper) {
        $A.createComponent('lightning:button',
                           {
                               label:"Create New",
                               value:"Create New",
                               onclick:component.getReference("c.handleSubmit")
                           },
                           function(newbutton, status, errorMessage){
                           if(status==='SUCCESS')
                           {
                               var body=component.get('v.body');
                               body.push(newbutton);
                               component.set('v.body',body);
                           } 
                           });
    } 
    
})