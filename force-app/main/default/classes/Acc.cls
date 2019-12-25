public class Acc {
    public static void accs(List<account> accs)
    {
        for(Account a: accs)
        {
            if(a.industry==null)
            {
               a.industry='hot';
            }           
        }
     }
 }