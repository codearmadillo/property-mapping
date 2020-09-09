export class Model<T> {
  constructor(from : Partial<T>, type : { new(...args: any[]): {} } ) {
    Object.assign(
      this,
      new type(from)
    );
  }
}