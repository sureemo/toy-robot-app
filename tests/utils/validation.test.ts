import { validateInput } from '../../src/utils/validation';

describe('validateInput', () => {
  test('should throw an error for missing arguments', () => {
    expect(() => validateInput('')).toThrow('Missing arguments');
  });

  test('should throw an error for invalid coordinates', () => {
    expect(() => validateInput('a,45,NORTH')).toThrow('Invalid coordinates (must be integers)');
    expect(() => validateInput('1,b,abc')).toThrow('Invalid coordinates (must be integers)');
  });

  test('should throw an error for invalid directions', () => {
    expect(() => validateInput('1,2,up')).toThrow('Invalid direction');
    expect(() => validateInput('1,2,northwest')).toThrow('Invalid direction');
  });

  test('should return true for valid input', () => {
    expect(validateInput('1,2,NORTH')).toBe(true);
    expect(validateInput('3,4,EAST')).toBe(true);
  });
});
