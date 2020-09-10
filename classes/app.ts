import { IAppModel, IAppSubmodel, IAppConjunctionModel } from "../interfaces/app";
import { IApiModel, IApiSubmodel, IApiConjunctionModel } from '../interfaces/api';
import { ApiModel, ApiSubmodel, ApiConjunctionModel } from "./api";
import { Model } from './model';

export class AppSubmodel extends Model<IApiSubmodel> implements IAppSubmodel {
  keyTitle : string;
  keyValue : string
  keyKeys : {
    firstKey : string;
    secondKey : string;
  }
  constructor(fromApi : IApiSubmodel, type = ApiSubmodel) {
    super(fromApi, type);
  }
}

export class AppModel extends Model<IApiModel> implements IAppModel {
  userName : string;
  userAge : number;
  userAddress : {
    userAddressStreet : string,
    userHouse: {
      houseNumber : number,
      houseColor : string
    }
  }
  constructor(fromApi : IApiModel, type = ApiModel) {
    super(fromApi, type);
  }
}

export class AppConjunctionModel extends Model<IApiConjunctionModel> implements IAppConjunctionModel {
  userName : string;
  userAge : number;
  userAddress : {
    userAddressStreet : string,
    userHouse: {
      houseNumber : number,
      houseColor : string
    }
  }
  constructor(fromApi : IApiConjunctionModel, type = ApiConjunctionModel) {
    super(fromApi, type);
  }
}