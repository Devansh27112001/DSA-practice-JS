const expect = (val_1) => {
  return {
    toBe: (val_2) => {
      if (val_1 === val_2) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (val_2) => {
      if (val_1 !== val_2) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
  };
};

// console.log(expect(1).notToBe(1));
