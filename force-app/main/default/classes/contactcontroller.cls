public with sharing class contactcontroller {
 	@AuraEnabled
    public static List<contact> findall()
    {
        return [select id,name,phone from contact limit 50];
    }
   	 @AuraEnabled
    public static List<contact> findbyname(String searchname)
    {
         String name='%'+searchname+'%'; 
        return [select id,name,phone from contact where name like :name limit 50];
    }
    
    @AuraEnabled
     
    public static Contact findById(String contactId)
    {
          
        return [select id,name,phone,mobilephone,Account.Name from contact where  id= :contactId];
    }
        
}