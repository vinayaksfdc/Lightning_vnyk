({
	doHandleEvent : function(component, event, helper) {
        alert('Event Handled'); 
		var conRec=event.getParam('conRecord');
        console.log('conRecord ',conRecord);
        var conList=component.get('v.ContactList');
        if(ContactList){
            ContactList.push(conRecord);
            component.set('v.ContactList',conList);
        }
        else
        {
            alert('tst');
        }
	}
})