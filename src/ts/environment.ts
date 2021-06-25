import Cell, { coordinates } from './terrain/Cell';
import Grass from './terrain/Grass';
import Tree from './terrain/Trees';
import Water from './terrain/Water';
import ElementWrapper from './utils/ElementWrapper';

const setupBasic = (rows: number, columns: number): void => {
  const app = document.getElementById('app');
  const table = document.createElement('table');
  app.appendChild(table);
  for(let i = 0; i < rows; i++) {
    const tableRow = document.createElement('tr');
    table.appendChild(tableRow)
    for (let j = 0; j < columns; j++) {
      const tableCell = document.createElement('td');
      tableRow.appendChild(tableCell)
      const newCell = new ElementWrapper(tableCell);
      newCell.sayHello();
    }
  }
};

/**
 *
 * @param arr
 * @param amount Number between 0 and 1, sets how likely it is that the Tree will be spawned.
 */
// const setupForest = (arr: Cell[][], amount: number) => {
//   let maxRowIndex = arr.length - 1;
//   let maxColumnIndex = arr[0].length - 1;
  // for (let row = 0; row < arr.length; row++) {
  //   for (let column = 0; column < arr[row].length; column++) {
  //     let random = Math.floor(Math.random() * 100);

  //     let neighborCoordinates = arr[row][column].neighborCoordinates;
  //     let neighborsWithTreesCounter = 0;

  //     for (let [neighborRow, neighborColumn] of neighborCoordinates) {
  //       if (
  //         neighborRow < 0 ||
  //         neighborRow > maxRowIndex ||
  //         neighborColumn < 0 ||
  //         neighborColumn > maxColumnIndex
  //       ) {
  //         continue;
  //       } else if (arr[neighborRow][neighborColumn].hasTerrain === true) {
  //         neighborsWithTreesCounter++;
  //       }
  //     }
  //     let neighborModifier = 0.05 * neighborsWithTreesCounter * 100;
  //     let modifier = 99 - amount * 100 - neighborModifier;
  //     if (random > modifier) {
  //       let tree = new Tree();
  //       arr[row][column].terrainType = tree;
  //     }
  //   }
  // }
// };

/**
 *
 * @param arr Cell Array to populate with a river
 * @param riverLength How long the river should be (extremely long or short values might result in bad generations)
 */
// const setupWater = (arr: Cell[][], riverLength: number) => {
//   let lastRiver: Cell;
//   for (let row = 0; row < arr.length; row++) {
//     for (let column = 0; column < arr[0].length; column++) {
//       let random = Math.floor(Math.random()*100);
//       if (random < 33) {
//         arr[row][column].terrainType = new Water();
//         lastRiver = arr[row][column];
//         console.log(lastRiver.terrainType.constructor.name);
        
//         let riverCellsCounter = 0;
//         let neighbors = arr[row][column].neighborCoordinates;
//         // console.log('first river is at', lastRiver.coordinates);
        
//         while (riverCellsCounter <= riverLength) {
          
//           let randomNewRiver = Math.floor(Math.random()*100);
//           if (randomNewRiver < 25 ) {
//             if (lastRiver.neighborCoordinates.W) {
//               let [newRow, newCol] = lastRiver.neighborCoordinates.W;
//               let newRiver = arr[newRow][newCol];
//               if (newRiver.terrainType.constructor.name !== 'Water') {
//                 newRiver.terrainType = new Water();
//                 lastRiver = newRiver;
//                 // console.log('river spawned to West');
//               } else {
//                 // console.log('river tried to spawn to West');
//                 riverCellsCounter--;
//               }
//             } else {
//               // console.log('river tried to spawn to West');
//               riverCellsCounter--;
//             }
//           } else if (randomNewRiver < 75) {
//             if (lastRiver.neighborCoordinates.S) {
//               let [newRow, newCol] = lastRiver.neighborCoordinates.S;
//               let newRiver = arr[newRow][newCol];
//               if (newRiver.terrainType.constructor.name !== 'Water') {
//                 newRiver.terrainType = new Water();
//                 lastRiver = newRiver;
//                 // console.log('river spawned to South');
//               } else {
//                 // console.log('river tried to spawn to South');
//                 riverCellsCounter--;
//               }
//             } else {
//               // console.log('river tried to spawn to South');
//               riverCellsCounter--;
//             }
//           } else {
//             if (lastRiver.neighborCoordinates.E) {
//               let [newRow, newCol] = lastRiver.neighborCoordinates.E;
//               let newRiver = arr[newRow][newCol];
//               if (newRiver.terrainType.constructor.name !== 'Water') {
//                 newRiver.terrainType = new Water();
//                 lastRiver = newRiver;
//                 // console.log('river spawned to East');
//               } else {
//                 // console.log('river tried to spawn to East');
//                 riverCellsCounter--;
//               }
//             } else {
//               // console.log('river tried to spawn to East');
//               riverCellsCounter--;
//             }
//           }
//           riverCellsCounter++;
//           // console.log(riverCellsCounter);
          
//         }
//         return;
//       }
      
//     }
//   }
// };

// export {setupBasic, setupForest, setupWater};
export {setupBasic}