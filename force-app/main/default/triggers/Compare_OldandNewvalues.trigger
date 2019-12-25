trigger Compare_OldandNewvalues on Account (before update) {
    
    //Here we will iterate on trigger.new list, which already holds the new values of all records.
    for (Account acc: Trigger.new) {
        //Here we use the account id, to get the older version of record.
        Account oldAccount = Trigger.oldMap.get(acc.ID);
        
        //once we get the older version, we can get any field's value from older version to compare.
        if(acc.AccountNumber != oldAccount.AccountNumber) {
            
            //Here is some logic being performed on a condition basis.
            System.debug('--*Account Number is changed*--');
            System.debug('**Old Account Number :'+oldAccount.AccountNumber);
            System.debug('**New Account Number :'+acc.AccountNumber);
            acc.Type = 'Prospect';
        }
        else{
            System.debug('--**Account Number has not been Updated**--');
            acc.Type = 'Other';
        }
    }
}