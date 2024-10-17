import { ToyRobot } from '../../src/models/toy-robot';
import { RightCommand } from '../../src/commands/right-command';

describe('RightCommand', () => {
  let robot: ToyRobot;

  beforeEach(() => {
    robot = ToyRobot.getInstance();
  });

  test('should change the direction to EAST if current is NORTH', () => {
    robot.set(1, 1, 'NORTH');

    const command = new RightCommand(robot);
    command.execute();

    expect(robot.getCurrentPosition()).toBe('1,1,EAST');
  });

  test('should change the direction to NORTH if current is WEST', () => {
    robot.set(1, 1, 'WEST');

    const command = new RightCommand(robot);
    command.execute();

    expect(robot.getCurrentPosition()).toBe('1,1,NORTH');
  });
});
