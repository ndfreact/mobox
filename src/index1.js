"use strict";

function log(target) {
    debugger
  //const desc = Object.getOwnPropertyNames(target.prototype);
  //const desc = Object.getOwnPropertyNames(target.prototype);
 // const desc = Object.getOwnPropertyNames(target.prototype);
  const desc = Object.getOwnPropertyDescriptors(target.prototype);

  for (const key of Object.keys(desc)) {
    if (key === "constructor") {
      continue;
    }
    const func = desc[key].value;
    if ("function" === typeof func) {
      Object.defineProperty(target.prototype, key, {
        value(...args) {
          console.log("before", key);
          const ret = func.apply(this, args);
          console.log("after", key);
          return ret;
        }
      });
    }
  }
}

function readonly(target, key, descriptor) {
  console.log(target, key, descriptor);
  descriptor.writable = false;
  descriptor.configurable = false;
  console.log(target, key, descriptor);
}

@log //babel-plugin-transform-decorators-legacy
class Numberic {
  constructor() {}
  @readonly PI = 3.1415926;
  add(...nums) {
    return nums.reduce((p, n) => p + n, 0);
  }
}
new Numberic().add(1,2);
//new Numberic().PI = "修改PI的值，在声明readonly后";
