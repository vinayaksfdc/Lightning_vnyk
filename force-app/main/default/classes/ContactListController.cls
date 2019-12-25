public class ContactListController {
@AuraEnabled
    public static list<contact> getcontactlist(string conid)
    {
        list<contact> conlist=new list<contact>([select id,firstname,lastname from Contact where id=:conid]);
        return conlist;
            }  
}