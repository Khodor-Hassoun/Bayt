const nestedObject = {
  undef: undefined,
  nul: null,
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
let i = 0;
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
