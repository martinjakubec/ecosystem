import * as env from './environment';
import make2DArr from './utils/2DArr';

const setupWorld = (rows: number, columns: number): void => {
  console.clear();
  let world = make2DArr(rows, columns);
  env.setupBasic(world);
  console.table(world);
    
};

setupWorld(3, 3);
