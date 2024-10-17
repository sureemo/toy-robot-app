import { Position } from '../../src/models/position';
import {
  NorthState,
  EastState,
  SouthState,
  WestState,
} from '../../src/models/direction-state';

describe('Direction States', () => {
  test('NorthState', () => {
    const northState = new NorthState();
    expect(northState.turnLeft()).toBeInstanceOf(WestState);
    expect(northState.turnRight()).toBeInstanceOf(EastState);
    expect(northState.move(new Position(2, 2))).toEqual(new Position(2, 3));
    expect(northState.toString()).toBe('NORTH');
  });

  test('EastState', () => {
    const eastState = new EastState();
    expect(eastState.turnLeft()).toBeInstanceOf(NorthState);
    expect(eastState.turnRight()).toBeInstanceOf(SouthState);
    expect(eastState.move(new Position(2, 2))).toEqual(new Position(3, 2));
    expect(eastState.toString()).toBe('EAST');
  });

  test('SouthState', () => {
    const southState = new SouthState();
    expect(southState.turnLeft()).toBeInstanceOf(EastState);
    expect(southState.turnRight()).toBeInstanceOf(WestState);
    expect(southState.move(new Position(2, 2))).toEqual(new Position(2, 1));
    expect(southState.toString()).toBe('SOUTH');
  });

  test('WestState', () => {
    const westState = new WestState();
    expect(westState.turnLeft()).toBeInstanceOf(SouthState);
    expect(westState.turnRight()).toBeInstanceOf(NorthState);
    expect(westState.move(new Position(2, 2))).toEqual(new Position(1, 2));
    expect(westState.toString()).toBe('WEST');
  });
});
