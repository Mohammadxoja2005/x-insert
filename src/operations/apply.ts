export function apply() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("target", target.constructor);
    console.log("propertyKey", propertyKey);
    console.log("descriptor", descriptor);
  };
}
