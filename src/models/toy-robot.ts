import { Position } from './position';
import { DirectionEnum } from '../enums/directions.enum';
import { TABLE_BOUNDARIES } from '../app.constant';

export class ToyRobot {
  private static instance: ToyRobot | null = null;
  private position: Position;
  private direction: string;

  private constructor() {
    this.position = new Position(0, 0);
    this.direction = DirectionEnum.NORTH;
  }

  static getInstance(): ToyRobot {
    if (!ToyRobot.instance) {
      ToyRobot.instance = new ToyRobot();
    }
    return ToyRobot.instance;
  }

  getCurrentPosition(): string {
    return `${this.position.toString()},${this.direction}`;
  }

  place(x: number, y: number, direction: string): void {
    if (x < 0 || x >= TABLE_BOUNDARIES.x || y < 0 || y >= TABLE_BOUNDARIES.y) {
      throw new Error("Invalid coordinates. The table size is 5x5.");
    }

    this.position = new Position(x, y);
    this.direction = direction;
  }

  move(): void {}

  left(): void {}

  right(): void {}
}
