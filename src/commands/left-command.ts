import { Command } from './command'
import { ToyRobot } from '../models/toy-robot'

export class LeftCommand implements Command {
  constructor(private robot: ToyRobot) {}

  execute() {
    this.robot.left();
  }
}
