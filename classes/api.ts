import { IApiModel, IApiSubmodel, IApiConjunctionModel } from "../interfaces/api";
import { Assert } from '../decorators/assert';

@Assert([
  { from: 'title', to: 'keyTitle' },
  { from: 'value', to: 'keyValue' },
  { from: 'keys', to: 'keyKeys' },
  { from: 'keys.key1', to: 'keyKeys.firstKey' },
  { from: 'keys.key2', to: 'keyKeys.secondKey' },
])
export class ApiSubmodel implements IApiSubmodel {
  title : string;
  value : string;
  keys : {
    key1: string;
    key2: string;
  }
  constructor(entity : IApiSubmodel) {
    Object.assign(this, entity);
    delete this[0];
  }
};

@Assert([
  { from: 'name', to: 'userName' },
  { from: 'age', to: 'userAge' },
  { from: 'address', to: 'userAddress' },
  { from: 'address.street', to: 'userAddress.userAddressStreet' }
])
export class ApiModel implements IApiModel {
  name : string;
  age : number;
  address : {
    street : string,
    house: {
      nr: number,
      color: string
    }
  }
  constructor(entity : IApiModel) {
    Object.assign(this, entity);
    delete this[0];
  }
}

@Assert([
  { from: 'name', to: 'userName' },
  { from: 'age', to: 'userAge' },
  { from: 'address', to: 'userAddress' },
  { from: 'address.street', to: 'userAddress.userAddressStreet' },
  { from: 'metafields', to: 'userMetaFields', type: ApiSubmodel }
])
export class ApiConjunctionModel implements IApiConjunctionModel {
  name : string;
  age : number;
  address : {
    street : string,
  }
  metafields : ApiSubmodel[];
  constructor(entity : IApiConjunctionModel) {
    Object.assign(this, entity);
    delete this[0];
  }
}