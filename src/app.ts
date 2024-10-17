import * as readline from 'node:readline';

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

  rl.on('line', (input) => {
    console.log(input);
  });
}

initializeReadline();
