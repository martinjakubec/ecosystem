import Cell from "../terrain/Cell";

const make2DArr = (rows, columns, cellContent: any = ''): any[][] => {
  let arr = [];
  for (let row = 0; row < rows; row++) {
    arr.push([]);
    for (let column = 0; column < columns; column++) {
      arr[row][column] = cellContent;
    }
  }
  return arr;
};

export default make2DArr;
