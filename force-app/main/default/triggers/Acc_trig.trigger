trigger Acc_trig on Account(after insert,after update) {
    List<Opportunity> optylist=new List<Opportunity>();
    Map<id,Account> accswithopp=new Map<id,Account>([select id,(Select id from Opportunities) from Account where id in:trigger.new]);
    for(Account a: Trigger.new)
    {
        
    }
    
}