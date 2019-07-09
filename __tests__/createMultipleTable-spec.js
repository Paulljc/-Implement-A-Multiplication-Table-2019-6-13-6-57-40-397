const createTable = require("../createMultipleTable")

it ('should valid two number', () => {
  expect(createTable.isValid(4, 3)).toBe(null);
});

// it ('should be an aligned multipleTable', () => {
//   expect(createTable.getMultipleTable(2, 3)).toBe(null);
// });

// it ('should valid two number', () => {
//   expect(createTable.createMultipleTable(2, 3)).toBe(null);
// });