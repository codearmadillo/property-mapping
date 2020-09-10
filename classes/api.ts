import { IApiModel } from "../interfaces/api";
import { Assert } from '../decorators/assert';

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
    street : string
  }
  constructor(entity : IApiModel) {
    Object.assign(this, entity);
  }
}