<aura:application extends="force:slds">
    <lightning:card title="Calculator" footer="Cancel">
        <aura:set attribute="Title">
         <lightning:avatar  fallbackIconName="standard:account" alternativeText="Salesforce"/>
        </aura:set>
         <div>   
            <c:calc></c:calc>
         </div>
    </lightning:card>
</aura:application>