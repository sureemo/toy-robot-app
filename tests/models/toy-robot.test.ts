import { ToyRobot } from '../../src/models/toy-robot';

describe('Toy Robot Movement Tests', () => {
  let robot: ToyRobot;

  beforeEach(() => {
    robot = ToyRobot.getInstance();
  });

  describe('ToyRobot', () => {
    test('Singleton instance', () => {
      const robot1 = ToyRobot.getInstance();
      const robot2 = ToyRobot.getInstance();
      expect(robot1).toBe(robot2);
    });

    test('getCurrentPosition should return default position 0,0,NORTH', () => {
      const robot1 = ToyRobot.getInstance();
      expect(robot1.getCurrentPosition()).toBe('0,0,NORTH');
    });

    describe('place command', () => {
      test('should set the new position and direction', () => {
        robot.place(1, 2, 'WEST');
        expect(robot.getCurrentPosition()).toBe('1,2,WEST');
      });

      test('should throw error if set new position out of boundary and position is not changed', () => {
        expect(() => {
          robot.place(7, 2, 'WEST')
        }).toThrow('Invalid coordinates. The table size is 5x5.');

        expect(robot.getCurrentPosition()).toBe('1,2,WEST');
      });
    });
  });
});
