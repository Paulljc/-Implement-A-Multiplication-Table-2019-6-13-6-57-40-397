const createTable = require("../createMultipleTable")

it('should be valid number', () => {
  //given
  const start = 2, end = 4;
  //when
  const result = createTable.isValid(start, end);
  //then
  expect(result).toBe(true);
});

it('should be an aligned multipleTable', () => {
  //given
  const start = 2, end = 4;
  //when
  const result = createTable.getMultipleTable(start, end);
  //then
  expect(result).toBe("2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16\n");
});

it('should be get result', () => {
  //given
  const start = 2, end = 4;
  //when
  const result = createTable.createMultipleTable(start, end);
  //then
  expect(result).toBe("2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16\n");
});