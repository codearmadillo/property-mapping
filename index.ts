import { AppModel } from "./classes/app";
import { IApiModel } from './interfaces/api';

/** API response */
const apiResponse : IApiModel = {
  name: 'Jiri',
  age: 24
}
/** Create App entity */
const entity : AppModel = new AppModel(apiResponse);
console.log(entity);
