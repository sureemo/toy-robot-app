import { Command } from './command'
import { ToyRobot } from '../models/toy-robot'

export class PlaceCommand implements Command {
  constructor(
    private robot: ToyRobot,
    private x: number,
    private y: number,
    private direction: string
  ) {}

  execute() {
    this.robot.set(this.x, this.y, this.direction);
  }
}
