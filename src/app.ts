import * as readline from 'node:readline';
import { ToyRobot } from './models/toy-robot';
import { CommandFactory } from './command-factory';

const robot = ToyRobot.getInstance();
const commandFactory = new CommandFactory(robot);

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
      const command = commandFactory.createCommand(input);
      command.execute();
    } catch (error: any) {
      console.error(`The command is ignored: ${error.message}`);
    }
  });
}

initializeReadline();
