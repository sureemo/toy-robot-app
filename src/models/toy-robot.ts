import { Position } from './position';
import {
  DirectionState,
  NorthState,
  EastState,
  SouthState,
  WestState,
} from './direction-state';
import { DirectionEnum } from '../enums/directions.enum';
import { TABLE_BOUNDARIES } from '../app.constant';

export class ToyRobot {
  private static instance: ToyRobot | null = null;
  private position: Position;
  private direction: DirectionState;

  private constructor() {
    this.position = new Position(0, 0);
    this.direction = new NorthState();
  }

  static getInstance(): ToyRobot {
    if (!ToyRobot.instance) {
      ToyRobot.instance = new ToyRobot();
    }
    return ToyRobot.instance;
  }

  private getDirectionState(direction: string): DirectionState {
    switch (direction.toUpperCase()) {
      case DirectionEnum.NORTH: return new NorthState();
      case DirectionEnum.EAST: return new EastState();
      case DirectionEnum.SOUTH: return new SouthState();
      case DirectionEnum.WEST: return new WestState();
      default: throw new Error("Invalid direction");
    }
  }

  set(x: number, y: number, direction: string): void {
    if (x < 0 || x >= TABLE_BOUNDARIES.x || y < 0 || y >= TABLE_BOUNDARIES.y) {
      throw new Error("Invalid coordinates. The table size is 5x5.");
    }

    this.position = new Position(x, y);
    this.direction = this.getDirectionState(direction);
  }

  move(): void {
    this.position = this.direction.move(this.position);
  }

  left(): void {
    this.direction = this.direction.turnLeft();
  }

  right(): void {
    this.direction = this.direction.turnRight();
  }

  getCurrentPosition(): string {
    return `${this.position.toString()},${this.direction.toString()}`;
  }
}
