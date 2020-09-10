import { IApiModel } from "../interfaces/api";
import { Assert } from '../decorators/assert';

@Assert([
  { from: 'name', to: 'userName' },
  { from: 'age', to: 'userAge' },
  { from: 'address', to: 'userAddress' },
  { from: 'address.street', to: 'userAddress.userAddressStreet' },
  { from: 'address.house', to: 'userAddress.userHouse' },
  { from: 'address.house.nr', to: 'userAddress.userHouse.houseNumber' }
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