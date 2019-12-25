public class AccountUtil {
    @AuraEnabled
    public static List<Account> getAccounts()
    {
        return [SELECT Id, Name, Phone, AccountNumber FROM Account  LIMIT 10];
    }
}