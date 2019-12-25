public class lightning_xe {
	@AuraEnabled
    public static string callMe(String firstname,String lastname)
    {
       String name='HI this is lightning and my name is '+firstname+' and '+lastname;
        return name; 
   }
}