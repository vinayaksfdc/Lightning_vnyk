({
    handleClick : function(component, event, helper) {
        var isValid=helper.validateFields(component, event, helper);
        
        if(isValid){
            var componentEvent=component.getEvent('CreateContacts');
            componentEvent.setParams({
                'conRecord' : component.get('v.ContactRecord')
            });
            component.fire();
        }
        else
        {
            alert('please fill fields');
        }
        
    }
})