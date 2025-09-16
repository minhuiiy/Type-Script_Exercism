export class Robot {
  private _name: string;
  private static usedNames = new Set<string>();

  constructor() {
    this._name = Robot.generateUniqueName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = Robot.generateUniqueName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  private static generateUniqueName(): string {
    let name: string;
    do {
      name = Robot.randomName();
    } while (Robot.usedNames.has(name));
    Robot.usedNames.add(name);
    return name;
  }

  private static randomName(): string {
    const letters =
      String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      String.fromCharCode(65 + Math.floor(Math.random() * 26));

    const numbers = ("" + Math.floor(Math.random() * 1000)).padStart(3, "0");

    return letters + numbers;
  }
}
