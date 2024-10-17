import { ToyRobot } from '../../src/models/toy-robot';
import { MoveCommand } from '../../src/commands/move-command';

describe('MoveCommand', () => {
  let robot: ToyRobot;

  beforeEach(() => {
    robot = ToyRobot.getInstance();
  });

  describe('NORTH', () => {
    test('should move up', () => {
      robot.set(1, 1, 'NORTH');

      const command = new MoveCommand(robot);
      command.execute();

      expect(robot.getCurrentPosition()).toBe('1,2,NORTH');
    });

    test('should not move if next move is out of boundary', () => {
      robot.set(1, 4, 'NORTH');

      const command = new MoveCommand(robot);
      command.execute();

      expect(robot.getCurrentPosition()).toBe('1,4,NORTH');
    });
  });

  describe('SOUTH', () => {
    test('should move down', () => {
      robot.set(1, 1, 'SOUTH');

      const command = new MoveCommand(robot);
      command.execute();

      expect(robot.getCurrentPosition()).toBe('1,0,SOUTH');
    });

    test('should not move if next move is out of boundary', () => {
      robot.set(1, 0, 'SOUTH');

      const command = new MoveCommand(robot);
      command.execute();

      expect(robot.getCurrentPosition()).toBe('1,0,SOUTH');
    });
  });

  describe('EAST', () => {
    test('should move to right', () => {
      robot.set(1, 1, 'EAST');

      const command = new MoveCommand(robot);
      command.execute();

      expect(robot.getCurrentPosition()).toBe('2,1,EAST');
    });

    test('should not move if next move is out of boundary', () => {
      robot.set(4, 1, 'EAST');

      const command = new MoveCommand(robot);
      command.execute();

      expect(robot.getCurrentPosition()).toBe('4,1,EAST');
    });
  });

  describe('WEST', () => {
    test('should move to left', () => {
      robot.set(1, 1, 'WEST');

      const command = new MoveCommand(robot);
      command.execute();

      expect(robot.getCurrentPosition()).toBe('0,1,WEST');
    });

    test('should not move if next move is out of boundary', () => {
      robot.set(0, 1, 'WEST');

      const command = new MoveCommand(robot);
      command.execute();

      expect(robot.getCurrentPosition()).toBe('0,1,WEST');
    });
  });
});
