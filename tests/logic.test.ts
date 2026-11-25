import { describe, expect, it } from "vitest";
import {
  bitsToByte,
  byteToHex,
  clampByte,
  decimalToBits,
  initialRobotState,
  printableAscii,
  stepRobot,
  type RobotCommand,
} from "../src/lib/logic";

describe("8bit převodník", () => {
  it("ořízne vstupy na rozsah jednoho bajtu", () => {
    expect(clampByte(-4)).toBe(0);
    expect(clampByte(256)).toBe(255);
    expect(clampByte(4.9)).toBe(4);
    expect(clampByte(Number.NaN)).toBe(0);
  });

  it.each([0, 1, 42, 65, 127, 255])("round-trip čísla %i přes bity", (value) => {
    expect(bitsToByte(decimalToBits(value))).toBe(value);
  });

  it("zobrazí HEX a tisknutelné znaky ASCII s hranicemi 32–126", () => {
    expect(byteToHex(0)).toBe("00");
    expect(byteToHex(255)).toBe("FF");
    expect(printableAscii(31)).toBe("Netisknutelný znak");
    expect(printableAscii(32)).toBe(" ");
    expect(printableAscii(65)).toBe("A");
    expect(printableAscii(126)).toBe("~");
    expect(printableAscii(127)).toBe("Netisknutelný znak");
  });
});

describe("robot v mřížce", () => {
  const obstacles = new Set(["0,4", "1,1", "3,2", "4,3", "4,4"]);

  it("otáčí se bez změny polohy", () => {
    const turned = stepRobot(initialRobotState, "right", obstacles);
    expect(turned).toEqual({ x: 0, y: 5, direction: 1, status: "ready" });
  });

  it("zastaví se před překážkou i za okrajem", () => {
    const obstacleCollision = stepRobot(initialRobotState, "forward", obstacles);
    expect(obstacleCollision.status).toBe("collision");
    const edgeCollision = stepRobot({ x: 0, y: 0, direction: 0, status: "ready" }, "forward", obstacles);
    expect(edgeCollision.status).toBe("collision");
    expect(stepRobot(obstacleCollision, "right", obstacles)).toBe(obstacleCollision);
  });

  it("projde připravenou cestu až do cíle", () => {
    const route: RobotCommand[] = [
      "right", "forward", "left", "forward", "forward", "forward",
      "right", "forward", "left", "forward", "forward", "right",
      "forward", "forward", "forward",
    ];
    const end = route.reduce((state, command) => stepRobot(state, command, obstacles), initialRobotState);
    expect(end).toEqual({ x: 5, y: 0, direction: 1, status: "goal" });
  });
});
