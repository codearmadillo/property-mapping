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
    userAddressStreet : string;
  }
}
export interface IAppConjunctionModel extends IAppModel {
  userMetaFields : IAppSubmodel[];
}