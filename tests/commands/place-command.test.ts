import { ToyRobot } from '../../src/models/toy-robot';
import { PlaceCommand } from '../../src/commands/place-command';

describe('PlaceCommand', () => {
  let robot: ToyRobot;

  beforeEach(() => {
    robot = ToyRobot.getInstance();
  });

  test('should set the new position and direction', () => {
    const command = new PlaceCommand(robot, 2, 3, 'EAST');
    command.execute();

    expect(robot.getCurrentPosition()).toBe('2,3,EAST');
  });

  test('should throw error if the new position is out of boundary', () => {
    const command = new PlaceCommand(robot, 5, 3, 'EAST');

    expect(() => {
      command.execute()
    }).toThrow('Invalid coordinates. The table size is 5x5.');
  });
});
