import { ToyRobot } from '../../src/models/toy-robot';
import { ReportCommand } from '../../src/commands/report-command';

describe('ReportCommand', () => {
  let robot: ToyRobot;
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    robot = ToyRobot.getInstance();
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should display default position and direction', () => {
    const command = new ReportCommand(robot);
    command.execute();

    expect(consoleLogSpy).toHaveBeenCalledWith('Output: 0,0,NORTH');
  });

  test('should display new setting of position and direction', () => {
    robot.set(1, 2, 'WEST');

    const command = new ReportCommand(robot);
    command.execute();

    expect(consoleLogSpy).toHaveBeenCalledWith('Output: 1,2,WEST');
  });

  test('should display new direction', () => {
    robot.left();

    const command = new ReportCommand(robot);
    command.execute();

    expect(consoleLogSpy).toHaveBeenCalledWith('Output: 1,2,SOUTH');
  });
});
