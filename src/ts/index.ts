import * as env from './environment';
import Water from './terrain/Water';
import make2DArr from './utils/2DArr';
import '../scss/app.scss'

const setupWorld = (rows: number, columns: number): void => {
  // console.clear();
  // let world = make2DArr(rows, columns);
  // env.setupBasic(world);
  // env.setupWater(world, 20);
  // // env.setupForest(world, 0.3);

  // // maps the terrain names into a new array to make it more visual
  // const cells = [...world].map((row) => {
  //   return row.map((cell) => {
  //     return '-' + cell.terrainType.constructor.name + '-';
  //   });
  // });
  // // console.table(world);
  // console.table(cells);
  
  env.setupBasic(rows, columns);
  
};

setupWorld(10, 20);
