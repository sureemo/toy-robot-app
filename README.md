# Toy Robot App

## Description
A console application to command a toy robot moving on a square table of dimension 5 units x 5 units.

- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction.
- Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

### Available Commands

| Command     |      Are      |
|-------------|---------------|
| PLACE X,Y,F | put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST |
| MOVE        | move the toy robot one unit forward in the direction it is currently facing |
| LEFT        | rotate the robot 90 degrees in the left direction without changing the position of the robot |
| RIGHT       | rotate the robot 90 degrees in the right direction without changing the position of the robot |
| REPORT      | announce the X,Y and F of the robot |

## Installation & Run

### Clone and Install Dependencies

```bash
git clone git@github.com:sureemo/toy-robot-app.git
cd toy-robot-app
npm install
```

### Build and Run

```bash
npm run build
npm start
```

### Test

```bash
npm test
```

## Stay in touch

- Author - Sureerat Phattara-ampornchai
- LinkedIn - [https://www.linkedin.com/in/sureemo](https://www.linkedin.com/in/sureemo)
