({
    handleComponent : function(component, event, helper) {
        
        var cars =component.get("v.cars");
        console.log(cars);
        
        $A.createComponents([
            ["ui:outputText",{
                "value" :  cars[0]
            }],
            ["ui:outputText",{
                "value" :  cars[1]
            }],
            ["ui:outputText",{
                "value" : cars[2]
            }]
            
            
        ],
                            function(components, status, errorMessage){
                                if (status === "SUCCESS") {
                                    var body = component.get("v.body");
                                    console.log('body is'+body);
                                    components.forEach(function(item){
                                        body.push(item);
                                    });
                                    component.set("v.body", body);
                                }
                                else if (status === "INCOMPLETE") {
                                    console.log("No response from server or client is offline.")
                                }
                                    else if (status === "ERROR") {
                                        console.log("Error: " + errorMessage);
                                    }
                            }
                           );
    },
    doinit: function(component,event,helper)
    {
        var cars = ["Saab", "Volvo", "BMW"];
        component.set('v.cars',cars);
        console.log(cars);
    }
})