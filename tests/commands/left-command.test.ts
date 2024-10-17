import { ToyRobot } from '../../src/models/toy-robot';
import { LeftCommand } from '../../src/commands/left-command';

describe('LeftCommand', () => {
  let robot: ToyRobot;

  beforeEach(() => {
    robot = ToyRobot.getInstance();
  });

  test('should change the direction to WEST if current is NORTH', () => {
    robot.set(1, 1, 'NORTH');

    const command = new LeftCommand(robot);
    command.execute();

    expect(robot.getCurrentPosition()).toBe('1,1,WEST');
  });

  test('should change the direction to SOUTH if current is WEST', () => {
    robot.set(1, 1, 'WEST');

    const command = new LeftCommand(robot);
    command.execute();

    expect(robot.getCurrentPosition()).toBe('1,1,SOUTH');
  });
});
