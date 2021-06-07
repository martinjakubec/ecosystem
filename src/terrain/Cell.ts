// impassable terrain
import Water from './Water';
import Tree from './Trees';
import Rock from './Rock';

// passable terrain
import Snow from './Snow';
import Grass from './Grass';
import Sand from './Sand';

type terrains = Water | Tree | Rock | Snow | Grass | Sand;

type coordinates = [number, number] | null;

interface coordinatesObject {
  NW: coordinates;
  N: coordinates;
  NE: coordinates;
  E: coordinates;
  SE: coordinates;
  S: coordinates;
  SW: coordinates;
  W: coordinates;
}

export default class Cell {
  private _containsAnimal: boolean;
  private _containsTerrain: boolean;
  private _terrain: terrains;
  private _animal: any; // change after animals have been defined
  private readonly _rowCoordinates: number;
  private readonly _columnCoordinates: number;
  private readonly _parrentArrayRowLength: number;
  private readonly _parrentArrayColumnLength: number;

  constructor(rowPosition: number, columnPosition: number, arr: any[][]) {
    // reasoning behind 'any' in this case is that no matter what is inside the array, it is only used to get the max row and max column values
    this._rowCoordinates = rowPosition;
    this._columnCoordinates = columnPosition;
    this._parrentArrayRowLength = arr.length;
    this._parrentArrayColumnLength = arr[0].length;
    // console.log(arr);

    // console.log(this._parrentArrayRowLength);
    // console.log(this._parrentArrayColumnLength);
  }

  public get coordinates(): coordinates {
    return [this._rowCoordinates, this._columnCoordinates];
  }

  public get neighborCoordinates(): coordinatesObject {
    const north: coordinates = [
      this._rowCoordinates - 1,
      this._columnCoordinates,
    ];
    const northEast: coordinates = [
      this._rowCoordinates - 1,
      this._columnCoordinates + 1,
    ];
    const east: coordinates = [
      this._rowCoordinates,
      this._columnCoordinates + 1,
    ];
    const southEast: coordinates = [
      this._rowCoordinates + 1,
      this._columnCoordinates + 1,
    ];
    const south: coordinates = [
      this._rowCoordinates + 1,
      this._columnCoordinates,
    ];
    const southWest: coordinates = [
      this._rowCoordinates + 1,
      this._columnCoordinates - 1,
    ];
    const west: coordinates = [
      this._rowCoordinates,
      this._columnCoordinates - 1,
    ];
    const northWest: coordinates = [
      this._rowCoordinates - 1,
      this._columnCoordinates - 1,
    ];
    return {
      NW:
        northWest.some((el) => el < 0) ||
        northWest[0] >= this._parrentArrayRowLength ||
        northWest[1] >= this._parrentArrayColumnLength
          ? null
          : northWest,
      N:
        north.some((el) => el < 0) ||
        north[0] >= this._parrentArrayRowLength ||
        north[1] >= this._parrentArrayColumnLength
          ? null
          : north,
      NE:
        northEast.some((el) => el < 0) ||
        northEast[0] >= this._parrentArrayRowLength ||
        northEast[1] >= this._parrentArrayColumnLength
          ? null
          : northEast,
      E:
        east.some((el) => el < 0) ||
        east[0] >= this._parrentArrayRowLength ||
        east[1] >= this._parrentArrayColumnLength
          ? null
          : east,
      SE:
        southEast.some((el) => el < 0) ||
        southEast[0] >= this._parrentArrayRowLength ||
        southEast[1] >= this._parrentArrayColumnLength
          ? null
          : southEast,
      S:
        south.some((el) => el < 0) ||
        south[0] >= this._parrentArrayRowLength ||
        south[1] >= this._parrentArrayColumnLength
          ? null
          : south,
      SW:
        southWest.some((el) => el < 0) ||
        southWest[0] >= this._parrentArrayRowLength ||
        southWest[1] >= this._parrentArrayColumnLength
          ? null
          : southWest,
      W:
        west.some((el) => el < 0) ||
        west[0] >= this._parrentArrayRowLength ||
        west[1] >= this._parrentArrayColumnLength
          ? null
          : west,
    };
  }

  public get terrainType(): terrains {
    return this._terrain;
  }

  public set terrainType(terrain: terrains) {
    if (this._terrain == undefined || this._terrain.isPassable) {
      // if nothing is inside or if the terrain is passable
      this._terrain = terrain;
      this._containsTerrain = true;
    }
  }

  public get hasTerrain(): boolean {
    return this._containsTerrain;
  }
}


export {coordinates};