export interface IAppContact {
  userPhone : number;
  userEmail : string;
}
export interface IAppSubmodel {
  keyTitle : string;
  keyValue : string
  keyKeys : {
    firstKey : string;
    secondKey : string;
  }
}
export interface IAppModel {
  userName : string;
  userAge : number;
  userAddress : {
    userAddressStreet : string
  };
  userContact? : IAppContact;
}
export interface IAppConjunctionModel extends IAppModel {
  userMetaFields : IAppSubmodel[];
}