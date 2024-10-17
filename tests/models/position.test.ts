import { Position } from '../../src/models/position'; // Assuming the Position class is in a file named Position.ts

describe('Position', () => {
  describe('constructor', () => {
    it('should create a Position with the given x and y coordinates', () => {
      const position = new Position(3, 4);
      expect(position.x).toBe(3);
      expect(position.y).toBe(4);
    });

    it('should accept negative values', () => {
      const position = new Position(-1, -2);
      expect(position.x).toBe(-1);
      expect(position.y).toBe(-2);
    });

    it('should accept zero values', () => {
      const position = new Position(0, 0);
      expect(position.x).toBe(0);
      expect(position.y).toBe(0);
    });
  });

  describe('toString', () => {
    it('should return a string representation of the position', () => {
      const position = new Position(3, 4);
      expect(position.toString()).toBe('3,4');
    });

    it('should handle negative values correctly', () => {
      const position = new Position(-1, -2);
      expect(position.toString()).toBe('-1,-2');
    });

    it('should handle zero values correctly', () => {
      const position = new Position(0, 0);
      expect(position.toString()).toBe('0,0');
    });
  });
});
