import { IAppModel } from "../interfaces/app";
import { IApiModel } from '../interfaces/api';
import { ApiModel } from "./api";
import { Model } from './model';

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