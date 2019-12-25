declare module "@salesforce/apex/contactcontroller.findall" {
  export default function findall(): Promise<any>;
}
declare module "@salesforce/apex/contactcontroller.findbyname" {
  export default function findbyname(param: {searchname: any}): Promise<any>;
}
declare module "@salesforce/apex/contactcontroller.findById" {
  export default function findById(param: {contactId: any}): Promise<any>;
}
