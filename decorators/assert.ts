interface IProperty {
  from : string;
  to : string;
  type? : { new(...args: any[]): {} }
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
          /** Get deep value */
          const value = deepFind(j.from, entity);
          /** If value is an object, create empty object */
          if(value) {
            if(typeof value === 'object') {
              if(Array.isArray(value)) {
                deepAssign(
                  j.to,
                  value.map((v) => {
                    if(!j.type) {
                      return null;
                    } else {
                      return new j.type(v);
                    }
                  }),
                  obj
                );
              } else {
                if(j.type) {
                  deepAssign(
                    j.to,
                    new j.type(value),
                    obj
                  );
                } else {
                  deepAssign(j.to, { }, obj);
                }
              }
            } else {
              deepAssign(j.to, value, obj);
            }
          }
        });
        Object.assign(this, obj);
      }
    };
  }
  function deepFind(prop : string, ctx : Object) : any {
    const path = prop.split('.');
    /** Duplicate context */
    let context = ctx;
    /** Iterate */
    while(path.length != 1) {
      const subpath = path.shift();
      if(!context.hasOwnProperty(subpath)) {
        return null;
      } else {
        context = context[subpath];
      }
    }
    return context[path.pop()];
  }
  function deepAssign(prop : string, val : any, ctx : Object) {
    /** Explode */
    const path = prop.split('.');
    /** While */
    while(path.length != 1) {
      const subpath = path.shift();
      if(ctx.hasOwnProperty(subpath)) {
        ctx = ctx[subpath];
      } else {
        return null;
      }
    }
    ctx[path.pop()] = val;
  }
};