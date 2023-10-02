const nestedObject = {
  undefine: undefined,
  null: null,
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
  number: 1,
  arr: [1, 2, 3],
  currentDate: new Date(),
};

/**
 * Arrays, null, dates are also considered object
 * If we wish to loop exclusively through a regular object ex: obj = {key:value}
 * We add an extra condition Array.isArray(val) is check if the object is an array or not
 */
function contains(object, value) {
  let values = Object.values(object);
  for (let val of values) {
    if (val === value) {
      return true;
    }
    if (typeof val === "object" && val != null) {
      if (contains(val, value)) {
        return true;
      }
    }
  }
  return false;
}

// Tests
console.log(contains(nestedObject, "foo2")); // true
console.log(contains(nestedObject, nestedObject.number)); // true
console.log(contains(nestedObject, nestedObject.data.info)); // true
console.log(contains(nestedObject, 3)); // true, 3 is in the array
console.log(contains(nestedObject, null)); // true
console.log(contains(nestedObject, undefined)); // true
console.log(contains(nestedObject, "Not in object")); // false
