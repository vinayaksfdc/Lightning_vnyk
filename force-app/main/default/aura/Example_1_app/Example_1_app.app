<aura:application extends="force:slds">
            <lightning:layout multipleRows="true">
                <lightning:layoutItem size="12" padding="around-medium" flexibility="auto">
                    <lightning:card >
                        <aura:set attribute="title">
                            <lightning:avatar fallbackIconName="standard:account" alternativeText="abc"/>
                            &nbsp;&nbsp;<b>Account</b>
                        </aura:set>
                        <aura:set attribute="actions">
                            <lightning:button label="Save" />
                            <lightning:button label="Cancel" />
                        </aura:set>
                        <div>
                            Name : Wipro    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; Industry:Banking
                        </div>
                    </lightning:card>
                </lightning:layoutItem>
                <lightning:layoutItem size="12" padding="around-medium" flexibility="auto">
                    <lightning:layout>
                        <lightning:layoutItem size="3" padding="horizontal-small" flexibility="auto">
                            <lightning:card title="Block1">
                                <lightning:tile label="Name : Satish" />
                                 <lightning:tile label="Name : Satish" />
                                 <lightning:tile label="Name : Satish" />
                            </lightning:card>
                        </lightning:layoutItem>
                        <lightning:layoutItem size="6" padding="horizontal-small" flexibility="auto">
                            <lightning:card title="Block2">
                                <lightning:input label="Last Name" />
                                <lightning:input label="First Name" />
                               
                            </lightning:card>
                        </lightning:layoutItem>
                        <lightning:layoutItem size="3" padding="horizontal-small" flexibility="auto">
                            <lightning:card title="Block3">
                                <p>Line one </p>
                                <p>Line one </p>
                                <p>Line one </p>
                                
                            </lightning:card>
                        </lightning:layoutItem>
                    </lightning:layout>
                </lightning:layoutItem>
            </lightning:layout>
	</aura:application>