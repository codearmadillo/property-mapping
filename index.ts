import { AppModel } from "./classes/app";
import { IApiModel } from './interfaces/api';

/** API response */
const apiResponse : IApiModel = {
  name: 'Jiri',
  age: 24,
  address: {
    street: "My fancy address",
    house: {
      nr: 123,
      color: 'red'
    }
  }
}
/** Create App entity */
const entity : AppModel = new AppModel(apiResponse);
document.getElementById("json").innerHTML = JSON.stringify(entity, null, 2);