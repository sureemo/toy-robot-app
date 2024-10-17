import { ToyRobot } from './models/toy-robot';
import { Command } from './commands/command';
import { PlaceCommand } from './commands/place-command';
import { MoveCommand } from './commands/move-command';
import { ReportCommand } from './commands/report-command';
import { LeftCommand } from './commands/left-command';
import { RightCommand } from './commands/right-command';
import { CommandEnum } from './enums/commands.enum';

export class CommandFactory {
  private robot: ToyRobot;

  constructor(robot: ToyRobot) {
    this.robot = robot;
  }

  createCommand(input: string): Command {
    const [command, params] = input.split(' ');

    switch (command.toUpperCase()) {
      case CommandEnum.PLACE:
        const [x, y, direction] = params.split(',');
        return new PlaceCommand(this.robot, parseInt(x), parseInt(y), direction);
      case CommandEnum.MOVE:
        return new MoveCommand(this.robot);
      case CommandEnum.LEFT:
        return new LeftCommand(this.robot);
      case CommandEnum.RIGHT:
        return new RightCommand(this.robot);
      case CommandEnum.REPORT:
        return new ReportCommand(this.robot);
      default:
        throw new Error("Invalid command");
    }
  }
}
