import * as readline from 'node:readline';
import { ToyRobot } from './models/toy-robot';
import { CommandEnum } from './enums/commands.enum';

const robot = ToyRobot.getInstance();

/**
 * Init prompt for accept the input from the user
 */
function initializeReadline(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('Move Toy Robot on 5x5 Table');
  console.log('Enter commands (PLACE x,y,DIRECTION | MOVE | LEFT | RIGHT | REPORT):');
  console.log('(Available DIRECTION: NORTH, EAST, SOUTH, WEST)');
  console.log('To exit, please press Ctrl+c');

  rl.on('line', (input) => {
    try {
      const [command, params] = input.split(' ');

      if (!command) {
        return;
      }

      switch (command.toUpperCase()) {
        case CommandEnum.PLACE:
          const [x, y, direction] = params.split(',');
          if (!x || !y || !direction) {
            throw new Error("Invalid command");
          }
          robot.place(Number(x), Number(y), direction);
          break;
        case CommandEnum.MOVE:
          robot.move();
          break;
        case CommandEnum.LEFT:
          robot.left();
          break;
        case CommandEnum.RIGHT:
          robot.right();
          break;
        case CommandEnum.REPORT:
          console.log(robot.getCurrentPosition());
          break;
        default:
          throw new Error("Invalid command");
      }
    } catch (error: any) {
      console.error(`The command is ignored: ${error.message}`);
    }
  });
}

initializeReadline();
