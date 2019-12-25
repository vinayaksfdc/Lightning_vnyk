public class example3 {
    @AuraEnabled
     public static String serverEcho(String filterName) { 
        return ('Hello from the server, ' + filterName);  
    }
}