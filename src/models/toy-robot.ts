import { DirectionEnum } from '../enums/directions.enum';

export class ToyRobot {
  private static instance: ToyRobot | null = null;
  private position: string;
  private direction: string;

  private constructor() {
    this.position = '0,0';
    this.direction = DirectionEnum.NORTH;
  }

  static getInstance(): ToyRobot {
    if (!ToyRobot.instance) {
      ToyRobot.instance = new ToyRobot();
    }
    return ToyRobot.instance;
  }

  getCurrentPosition(): string {
    return `${this.position},${this.direction}`;
  }

  place(x: number, y: number, direction: string): void {}

  move(): void {}

  left(): void {}

  right(): void {}
}
