export function commands(value: number): string[] {
  const result: string[] = [];

  if(value & 1)
    result.push("wink");
  if(value & 2)
    result.push("double blink");
  if(value & 4)
    result.push("close your eyes");
  if(value & 8)
    result.push("jump");
  if(value & 16)
    result.reverse();
  return result;
}

