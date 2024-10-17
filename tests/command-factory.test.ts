import { ToyRobot } from '../src/models/toy-robot';
import { CommandFactory } from '../src/command-factory';
import { PlaceCommand } from '../src/commands/place-command';
import { MoveCommand } from '../src/commands/move-command';
import { ReportCommand } from '../src/commands/report-command';
import { LeftCommand } from '../src/commands/left-command';
import { RightCommand } from '../src/commands/right-command';

describe('CommandFactory', () => {
  let robot: ToyRobot;
  let commandFactory: CommandFactory;

  beforeEach(() => {
    robot = ToyRobot.getInstance();
    commandFactory = new CommandFactory(robot);
  });

  test('PLACE command create PlaceCommand instance', () => {
    const command = commandFactory.createCommand('PLACE 2,3,EAST');
    expect(command).toBeInstanceOf(PlaceCommand);
  });

  test('MOVE command create MoveCommand instance', () => {
    const command = commandFactory.createCommand('MOVE');
    expect(command).toBeInstanceOf(MoveCommand);
  });

  test('LEFT command create LeftCommand instance', () => {
    const command = commandFactory.createCommand('LEFT');
    expect(command).toBeInstanceOf(LeftCommand);
  });

  test('RIGHT command create RightCommand instance', () => {
    const command = commandFactory.createCommand('RIGHT');
    expect(command).toBeInstanceOf(RightCommand);
  });

  test('REPORT command create ReportCommand instance', () => {
    const command = commandFactory.createCommand('REPORT');
    expect(command).toBeInstanceOf(ReportCommand);
  });

  test('Throw error for invalid command', () => {
    expect(() => {
      commandFactory.createCommand('INVALID');
    }).toThrow('Invalid command');
  });
});
