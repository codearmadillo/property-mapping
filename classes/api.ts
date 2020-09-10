import { IApiModel, IApiSubmodel } from "../interfaces/api";
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
  }
}

@Assert([
  { from: 'name', to: 'userName' },
  { from: 'age', to: 'userAge' },
  { from: 'address', to: 'userAddress' },
  { from: 'address.street', to: 'userAddress.userAddressStreet' },
  { from: 'metafields', to: 'userMetaFields' }
])
export class ApiConjunctionModel {
  name : string;
  age : number;
  address : {
    street : string,
  }
  metafields : ApiSubmodel[];
}