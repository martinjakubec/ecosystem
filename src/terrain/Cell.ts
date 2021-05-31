// impassable terrain
import Water from './Water';
import Tree from './Trees';
import Rock from './Rock';

// passable terrain
import Snow from './Snow';
import Grass from './Grass';
import Sand from './Sand';

export default class Cell {
  hasAnimal: boolean;
  hasTerrain: boolean;
  terrain: Water | Tree | Rock | Snow | Grass | Sand;
  animal: any; // change after animals have been defined
  readonly rowCoordinates: number
  readonly columnCoordinates: number


  constructor(rowPosition: number, columnPosition: number) {
    this.rowCoordinates = rowPosition;
    this.columnCoordinates = columnPosition;
  }
  
  get coordinates(): [number, number] {
    return [this.rowCoordinates, this.columnCoordinates]
  }

  get neighborCoordinates(): [number, number][] {
    // const north = [this.rowCoordinates - 1, this.columnCoordinates];
    // const east = [this.rowCoordinates, this.columnCoordinates + 1];
    // const south = [this.rowCoordinates + 1, this.columnCoordinates];
    // const west = [this.rowCoordinates, this.columnCoordinates - 1];
    return [[1, 2]]
  }
}
