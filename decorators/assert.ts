interface IProperty {
  from : string;
  to : string;
}
export function Assert<T extends { new(...args: any[]): {} }>(map : IProperty[] = []) {
  return (constructor: T) => {
    return class extends constructor {
      constructor(...args : any[]) {
        super(args);
        /** Load entity from args */
        const entity = args[0];
        /** Declare empty object */
        const obj = { };
        /** Create new object using map */
        Object.keys(entity).forEach((entityProp) => {
          /** Find match in map */
          const mapMatch = map.find((i) => i.from === entityProp);
          /** If map match isn't found, copy previous value */
          if(!mapMatch) {
            obj[entityProp] = entity[entityProp];
          } else {
            /** If it is found, change name but keep value */
            obj[mapMatch.to] = entity[entityProp];
          }
          /** Delete value from original entity */
          delete entity[entityProp];
        });
        /** Assign new values */
        Object.assign(this, obj);
      }
    };
  }
}