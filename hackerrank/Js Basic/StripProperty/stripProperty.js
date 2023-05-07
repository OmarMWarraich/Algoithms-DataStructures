// A function that takes an object and a property name and returns the object without that property

console.log(stripProperty({ a: 1, b: 2, c: 3 }, "b")); // {a: 1, c: 3}
console.log(stripProperty({ foo: "bar" }, "foo")); // {}
console.log(stripProperty({ foo: "bar" }, "bar")); // {foo: "bar"}

// Method-1: Using delete operator
/* function stripProperty(obj, prop) {
  for (let key in obj) {
    if (key === prop) {
      delete obj[key];
    }
  }
  return obj;
} */

// Method-2: Using Object.keys() and Array.prototype.filter()

/* function stripProperty(obj, prop) {
    return Object.keys(obj)
        .filter((key) => key !== prop)
        .reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
        }, {});
    } */

// Method-3: Using Object.keys() and Array.prototype.reduce()

/* function stripProperty(obj, prop) {
    return Object.keys(obj).reduce((acc, key) => {
        if (key !== prop) {
        acc[key] = obj[key];
        }
        return acc;
    }
    , {});
}  */

// Method-4: Using Object.keys() and Array.prototype.forEach()

/* function stripProperty(obj, prop) {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
        if (key !== prop) {
        newObj[key] = obj[key];
        }
    }
    );
    return newObj;
} */

// Method-5: Using Object.keys() and Array.prototype.map()

function stripProperty(obj, prop) {
    return Object.keys(obj)
        .map((key) => {
        if (key !== prop) {
            return { [key]: obj[key] };
        }
        }
        )
        .reduce((acc, curr) => {
        return { ...acc, ...curr };
        }
        , {});
}