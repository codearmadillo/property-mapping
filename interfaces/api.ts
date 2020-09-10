export interface IApiSubmodel {
  title: string;
  value: string;
  keys: {
    key1: string;
    key2: string;
  }
}
export interface IApiModel {
  name : string;
  age : number;
  address : {
    street : string;
  }
}
export interface IApiConjunctionModel extends IApiModel {
  metafields : IApiSubmodel[];
}