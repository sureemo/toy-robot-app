import { Command } from './command'
import { ToyRobot } from '../models/toy-robot'

export class ReportCommand implements Command {
  constructor(private robot: ToyRobot) {}

  execute() {
    console.log(`Output: ${this.robot.getCurrentPosition()}`);
  }
}
