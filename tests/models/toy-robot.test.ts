import { ToyRobot } from '../../src/models/toy-robot';

describe('Toy Robot Model Tests', () => {
  let robot: ToyRobot;

  beforeEach(() => {
    robot = ToyRobot.getInstance();
  });

  test('Singleton instance', () => {
    const robot1 = ToyRobot.getInstance();
    const robot2 = ToyRobot.getInstance();
    expect(robot1).toBe(robot2);
  });

  test('getCurrentPosition should return default position 0,0,NORTH', () => {
    const robot1 = ToyRobot.getInstance();
    expect(robot1.getCurrentPosition()).toBe('0,0,NORTH');
  });

  describe('place', () => {
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

  describe('move', () => {
    test('should move up if north', () => {
      robot.place(1, 1, 'NORTH');
      robot.move();
      expect(robot.getCurrentPosition()).toBe('1,2,NORTH');
    });

    test('should move down if south', () => {
      robot.place(1, 1, 'SOUTH');
      robot.move();
      expect(robot.getCurrentPosition()).toBe('1,0,SOUTH');
    });

    test('should move right if east', () => {
      robot.place(1, 1, 'EAST');
      robot.move();
      expect(robot.getCurrentPosition()).toBe('2,1,EAST');
    });

    test('should move left if west', () => {
      robot.place(1, 1, 'WEST');
      robot.move();
      expect(robot.getCurrentPosition()).toBe('0,1,WEST');
    });

    test('should not move if new position is out of boundary', () => {
      robot.place(1, 4, 'NORTH');
      robot.move();
      expect(robot.getCurrentPosition()).toBe('1,4,NORTH');

      robot.place(1, 0, 'SOUTH');
      robot.move();
      expect(robot.getCurrentPosition()).toBe('1,0,SOUTH');

      robot.place(4, 1, 'EAST');
      robot.move();
      expect(robot.getCurrentPosition()).toBe('4,1,EAST');

      robot.place(0, 1, 'WEST');
      robot.move();
      expect(robot.getCurrentPosition()).toBe('0,1,WEST');
    });
  });

  describe('left', () => {
    test('should set new direction to WEST if current direction is NORTH', () => {
      robot.place(1, 1, 'NORTH');
      robot.left();
      expect(robot.getCurrentPosition()).toBe('1,1,WEST');
    })
  });

  describe('right', () => {
    test('should set new direction to EAST if current direction is NORTH', () => {
      robot.place(1, 1, 'NORTH');
      robot.right();
      expect(robot.getCurrentPosition()).toBe('1,1,EAST');
    })
  });
});
