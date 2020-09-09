import { IApiModel } from "../interfaces/api";
import { Assert } from '../decorators/assert';

@Assert()
export class ApiModel implements IApiModel {
  name : string;
  age : number;
  constructor(entity : IApiModel) {
    Object.assign(this, entity);
  }
}