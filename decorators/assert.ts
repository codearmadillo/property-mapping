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
        map
        .sort((a, b) => {
          let aL = a.from.split('.').length;
          let bL = b.from.split('.').length;
          if(aL === bL) {
            return 0;
          } else {
            return aL < bL ? -1 : 1;
          }
        })
        .forEach((j, i, a) => {
          /** Find a match */
          console.log(`${j.from} => ${deepFind(j.from, entity)}`);
        });
        return;
        /** Create new object using map */
        Object.keys(entity).forEach((entityProp) => {
          /** Find match in map */
          const mapMatch = map.find((i) => i.from === entityProp);
          /** If map match isn't found, copy previous value */
          if(!mapMatch) {
            obj[entityProp] = entity[entityProp];
          } else {
            deepAssign(mapMatch.to, entity[entityProp], obj);
            return;
            /** If original is type of object, create empty object */
            deepAssign(mapMatch.to, entity[entityProp], obj);
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
  function deepFind(prop : string, ctx : Object) : boolean {
    const path = prop.split('.');
    /** Duplicate context */
    let context = ctx;
    /** Iterate */
    while(path.length != 1) {
      const subpath = path.shift();
      if(!context.hasOwnProperty(subpath)) {
        return false;
      } else {
        context = context[subpath];
      }
    }
    return context.hasOwnProperty(path.pop());
  }
  function deepAssign(prop : string, val : any, ctx : Object) {
    /** Explode */
    const path = prop.split('.');
    /** While */
    while(path.length != 1) {
      const sub = path.shift();
    }
    ctx[prop] = val;
  }
};