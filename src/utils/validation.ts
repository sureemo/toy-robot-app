import { DirectionEnum } from "../enums/directions.enum";

export function validateInput(params: string): boolean {
  if (!params) {
    throw new Error("Missing arguments");
  }

  const [x, y, direction] = params.split(',');

  if (!/^\d+$/.test(x) || !/^\d+$/.test(y)) {
    throw new Error("Invalid coordinates (must be integers)");
  }

  if (
    !direction || !Object.values(DirectionEnum).includes(direction.toUpperCase() as DirectionEnum)) {
    throw new Error("Invalid direction");
  }

  return true;
}
