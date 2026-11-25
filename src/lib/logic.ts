export function clampByte(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(255, Math.max(0, Math.trunc(value)));
}

export function decimalToBits(value: number): boolean[] {
  const byte = clampByte(value);
  return Array.from({ length: 8 }, (_, index) => (byte & (1 << (7 - index))) !== 0);
}

export function bitsToByte(bits: readonly boolean[]): number {
  return bits.slice(0, 8).reduce((value, bit, index) => value + (bit ? 1 << (7 - index) : 0), 0);
}

export function byteToHex(value: number): string {
  return clampByte(value).toString(16).toUpperCase().padStart(2, "0");
}

export function printableAscii(value: number): string {
  const byte = clampByte(value);
  return byte >= 32 && byte <= 126 ? String.fromCharCode(byte) : "Netisknutelný znak";
}

export type RobotCommand = "forward" | "left" | "right";
export type RobotStatus = "ready" | "collision" | "goal";
export interface RobotState { x: number; y: number; direction: 0 | 1 | 2 | 3; status: RobotStatus; }

export const initialRobotState: RobotState = { x: 0, y: 5, direction: 0, status: "ready" };
const directionDeltas = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
] as const;

export function stepRobot(state: RobotState, command: RobotCommand, obstacles: ReadonlySet<string>): RobotState {
  if (state.status !== "ready") return state;
  if (command === "left") return { ...state, direction: ((state.direction + 3) % 4) as RobotState["direction"] };
  if (command === "right") return { ...state, direction: ((state.direction + 1) % 4) as RobotState["direction"] };
  const delta = directionDeltas[state.direction];
  const x = state.x + delta.x;
  const y = state.y + delta.y;
  if (x < 0 || x > 5 || y < 0 || y > 5 || obstacles.has(`${x},${y}`)) return { ...state, status: "collision" };
  return { x, y, direction: state.direction, status: x === 5 && y === 0 ? "goal" : "ready" };
}
