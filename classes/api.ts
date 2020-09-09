import { IApiModel } from "../interfaces/api";
import { Assert } from '../decorators/assert';

@Assert([
  { from: 'name', to: 'userName' },
  { from: 'age', to: 'userAge' }
])
export class ApiModel implements IApiModel {
  name : string;
  age : number;
  constructor(entity : IApiModel) {
    Object.assign(this, entity);
  }
}