import { Position } from './position';
import { DirectionEnum } from '../enums/directions.enum';

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
    this.position = new Position(x, y);
    this.direction = direction;
  }

  move(): void {}

  left(): void {}

  right(): void {}
}
