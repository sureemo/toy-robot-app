import { Command } from './command'
import { ToyRobot } from '../models/toy-robot'

export class MoveCommand implements Command {
  constructor(private robot: ToyRobot) {}

  execute() {
    this.robot.move();
  }
}
