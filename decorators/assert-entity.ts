export function AssertEntity<T extends Object>(map : {from: string, to: string}[]) {
  return (target : any) => {
    /** Save reference to original */
    const original = target;
    /** Generate instance of class */
    const construct = (j, args) => {
      const c : any = () => {
        return j.apply(this, args);
      }
      c.prototype = j.prototype;
      return new c();
    }
    /** Define new constructor */
    const newStruct : any = (...args) => {
      /** Retrieve full entity */
      const entity = args[0];
      /** Start iterating through map and compare it to entity */
      Object.keys(entity).forEach((key) => {
        /** Find match in provided map */
        const i = map.find((j) => j.from === key);
        /** If log in map doesn't exist, just leave the property as it is */
        if (!i) {
          return;
        } else {
          /** If it does exist, the property in 'entity' needs to be renamed */
          entity[i.to] = entity[key];
          /** Delete old property */
          delete entity[key];
        }
      });
      /** Return */
      return construct(original, args);
    }
    /** Copy prototype */
    newStruct.prototype = original.prototype;
    /** Return new instance */
    return newStruct;
  };
}