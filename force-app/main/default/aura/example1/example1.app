<aura:application extends="force:slds">
            <lightning:recordViewForm objectApiName="Account" recordId="0016F00002UVHSmQAP">
                <lightning:outputField fieldName="Name" />
                <lightning:outputField fieldName="Industry" />
                <lightning:outputField fieldName="Type" />
                <lightning:outputField fieldName="Rating" />
                <lightning:outputField fieldName="Phone" />
                <lightning:outputField fieldName="Ownership" />
            </lightning:recordViewForm>
          
            <lightning:recordViewForm recordId="0016F00002PGUsdQAH" objectApiName="Account">
                <div class="slds-box slds-box-small">
                    <lightning:outputField fieldName="Name" />
                <lightning:outputField fieldName="Industry" />
                <lightning:outputField fieldName="Type" />
                </div>
            </lightning:recordViewForm>
	</aura:application>