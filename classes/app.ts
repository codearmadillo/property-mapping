import { IAppModel, IAppSubmodel, IAppConjunctionModel, IAppContact } from "../interfaces/app";
import { IApiModel, IApiSubmodel, IApiConjunctionModel, IApiContact } from '../interfaces/api';
import { ApiModel, ApiSubmodel, ApiConjunctionModel, ApiContact } from "./api";
import { Model } from './model';

export class AppContact extends Model<IApiContact> implements IAppContact {
  userPhone : number;
  userEmail : string;
  constructor(fromApi : IApiContact, type = ApiContact) {
    super(fromApi, type);
  }
}
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
    userAddressStreet : string
  }
  constructor(fromApi : IApiModel, type = ApiModel) {
    super(fromApi, type);
  }
}
export class AppConjunctionModel extends Model<IApiConjunctionModel> implements IAppConjunctionModel {
  userName : string;
  userAge : number;
  userAddress : {
    userAddressStreet : string
  }
  userMetaFields: AppSubmodel[];
  constructor(fromApi : IApiConjunctionModel, type = ApiConjunctionModel) {
    super(fromApi, type);
  }
}