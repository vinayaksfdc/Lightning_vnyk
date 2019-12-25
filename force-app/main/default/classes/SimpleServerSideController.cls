public class SimpleServerSideController {

    @AuraEnabled
    public static string callme()
    {
        string name='Raj kmar is an intellng boy';
        return name;
    } 
}