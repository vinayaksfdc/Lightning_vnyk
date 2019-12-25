({   
       /**
	 * Webkul Software.
	 *
	 * @category  Webkul
	 * @author    Webkul
	 * @copyright Copyright (c) 2010-2016 Webkul Software Private Limited (https://webkul.com)
	 * @license   https://store.webkul.com/license.html
	**/ 
    applycss:function(cmp,event){
	//initialize        
        var cmpTarget = cmp.find('Modalbox');
       	var cmpBack = cmp.find('MB-Back');
        $A.util.addClass(cmpTarget, 'slds-fade-in-open');
        $A.util.addClass(cmpBack, 'slds-backdrop--open'); 
    },
    removeComponent:function(component, event, helper){
        //get event and set the parameter of Aura:component type, as defined in the event above.
        var compEvent = component.getEvent("RemoveComponent");
        compEvent.setParams({
        	"comp" : component
        });
	compEvent.fire();
    }
})