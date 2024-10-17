import { greet } from '../src/app';

describe('Greet Tests', () => {
  test('should return Hello World', () => {
    expect(greet()).toEqual('Hello World');
  });
});
