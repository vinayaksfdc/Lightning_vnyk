public class BeerSearchAuraService {
    @AuraEnabled
    public static List<sObject> searchBeer(String searchParam)
    { 
        String likeParam = '%' +searchParam+'%'; 
        String Query= '';
        if(searchParam != null)
        {
            Query='select id,Name,Price__c,Remaining_Quantity__c,Beer__c,Alochol__c,ID__c from Beer__C where Name like: likeParam limit 10';  
        }
        else
        {
            Query='select id,Name,Beer__c,Price__c,Remaining_Quantity__c,Alochol__c,ID__c from Beer__C limit 10';
        }
        List<sObject> Blist=Database.query(Query);
        return Blist;
    }
}