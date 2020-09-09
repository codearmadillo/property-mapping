interface IProperty {
  from : string;
  to : string;
}
export function Assert<T extends { new(...args: any[]): {} }>(map : IProperty[]) {
  return (constructor: T) => {
    return class extends constructor {
      constructor(...args : any[]) {
        super(args);
        /** Load entity from args */
        const entity = args[0];
        /** Declare empty object */
        const obj = { };
        /** Create new object using map */
      
        /** Assert */
        Object.assign(this, {
          userName : 'MyName',
          userAge : 20
        });
      }
    };
  }
}