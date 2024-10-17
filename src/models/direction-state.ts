import { Position } from './position';
import { DirectionEnum } from '../enums/directions.enum';
import { TABLE_BOUNDARIES } from '../app.constant';

export interface DirectionState {
  turnLeft(): DirectionState;
  turnRight(): DirectionState;
  move(position: Position): Position;
  toString(): string;
}

export class NorthState implements DirectionState {
  turnLeft() {
    return new WestState();
  }

  turnRight() {
    return new EastState();
  }

  move(position: Position) {
    const newY = Math.min(position.y + 1, TABLE_BOUNDARIES.y - 1);

    return new Position(position.x, newY);
  }

  toString() { return DirectionEnum.NORTH; }
}

export class EastState implements DirectionState {
  turnLeft() {
    return new NorthState();
  }

  turnRight() {
    return new SouthState();
  }

  move(position: Position) {
    const newX = Math.min(position.x + 1, TABLE_BOUNDARIES.x - 1);

    return new Position(newX, position.y);
  }

  toString() {
    return DirectionEnum.EAST;
  }
}

export class SouthState implements DirectionState {
  turnLeft() {
    return new EastState();
  }

  turnRight() {
    return new WestState();
  }

  move(position: Position) {
    const newY = Math.max(position.y - 1, 0);

    return new Position(position.x, newY);
  }

  toString() {
    return DirectionEnum.SOUTH;
  }
}

export class WestState implements DirectionState {
  turnLeft() {
    return new SouthState();
  }

  turnRight() {
    return new NorthState();
  }

  move(position: Position) {
    const newX = Math.max(position.x - 1, 0);

    return new Position(newX, position.y);
  }

  toString() {
    return DirectionEnum.WEST;
  }
}
