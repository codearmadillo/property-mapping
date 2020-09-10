import { AppModel, AppSubmodel, AppConjunctionModel } from "./classes/app";
import { IApiModel, IApiSubmodel } from './interfaces/api';

/** API response */
const apiSubmodelResponse : IApiSubmodel = {
  title: 'title1',
  value: 'value1',
  keys: {
    key1: 'key10',
    key2: 'value10'
  }
}
const apiResponse : IApiModel = {
  name: 'Jiri',
  age: 24,
  address: {
    street: "My fancy address"
  }
}
/** Create App and Subapp entity */
const entity : AppModel = new AppModel(apiResponse);
const subentity : AppSubmodel = new AppSubmodel(apiSubmodelResponse);
/** Try conjunction */
const conjunction : AppConjunctionModel = new AppConjunctionModel({
  ...apiResponse,
  metafields: [
    apiSubmodelResponse
  ]
})
/** Debug */
document.getElementById("json").innerHTML = JSON.stringify(
  {
    entity,
    subentity,
    conjunction
  }, null, 2
);