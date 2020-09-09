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
        /** Sort map by path length */
        map = map.sort((a, b) => {
          let aL = a.from.split('.').length;
          let bL = b.from.split('.').length;
          if(aL === bL) {
            return 0;
          } else {
            return aL < bL ? -1 : 1;
          }
        });
        /** Create new object using map */
        Object.keys(entity).forEach((entityProp) => {
          /** Find match in map */
          const mapMatch = map.find((i) => i.from === entityProp);
          /** If map match isn't found, copy previous value */
          if(!mapMatch) {
            obj[entityProp] = entity[entityProp];
          } else {
            /** If original is type of object, create empty object */
            if(typeof entity[entityProp] === 'object' && !Array.isArray(entity[entityProp])) {
              deepAssign(mapMatch.to, { }, obj);
            } else {
              /** If value isn't object, simply copy it */
              deepAssign(mapMatch.to, entity[entityProp], obj);
            }
          }
          /** Delete value from original entity */
          delete entity[entityProp];
        });
        /** Assign new values */
        Object.assign(this, obj);
      }
    };
  }
  function deepFind(prop : string, ctx : Object) {

  }
  function deepAssign(prop : string, val : any, ctx : Object) {
    /** Explode */
    const path = prop.split('.');
    console.log(prop);
    /** While */
    while(path.length != 1) {
      const sub = path.shift();
      console.log(sub);
    }
    ctx[prop] = val;
  }
}