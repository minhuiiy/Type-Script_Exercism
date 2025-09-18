export class Clock {
  private minutes: number;

  constructor(hour: unknown, minute: unknown = 0) {
    const h = hour as number;
    const m = minute as number;
    this.minutes = ((h * 60 + m) % 1440 + 1440) % 1440;
  }

  public toString(): string {
    const h = Math.floor(this.minutes / 60);
    const m = this.minutes % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  }

  public plus(minutes: unknown): Clock {
    return new Clock(0, this.minutes + (minutes as number));
  }

  public minus(minutes: unknown): Clock {
    return new Clock(0, this.minutes - (minutes as number));
  }

  public equals(other: unknown): boolean {
    return this.minutes === (other as Clock).minutes;
  }
}
