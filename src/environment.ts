import Cell from "./terrain/Cell";

const setupBasic = (arr: any[][]): void => {
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
      arr[row][column] = new Cell(row, column);
    }
  }
};



export {setupBasic};
