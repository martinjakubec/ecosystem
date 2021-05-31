const make2DArr = (rows, columns): any[][] => {
  let arr = [];
  for (let row = 0; row < rows; row++) {
    arr.push([]);
    for (let column = 0; column < columns; column++) {
      arr[row][column] = ''
    }
  }
  return arr;
};

export default make2DArr;
