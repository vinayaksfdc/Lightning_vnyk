public class Example_6 {
    
    @AuraEnabled
    public static List<Sobject> callMe(String accname)
    {
        List<Sobject>   ss=[SELECT Id, Name, phone,industry,
                            (SELECT Amount FROM Opportunities),
                            (SELECT FirstName,LastName FROM Contacts)
                            FROM Account where name=: accname];
        system.debug(ss);
        return ss;
        
    }
    
}