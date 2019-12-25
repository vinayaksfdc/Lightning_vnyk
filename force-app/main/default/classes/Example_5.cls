public class Example_5 {
    @AuraEnabled
        public static string callMe(String lastname, String firstname)
        {
         String name= lastname+'  '+firstname;
            return name;
            
        }

}