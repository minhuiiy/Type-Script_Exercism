export function score(x: number, y: number): number {
  // Tính khoảng cách từ gốc (0, 0) đến điểm (x, y)
  const distance = Math.sqrt(x * x + y * y);

  // Nếu trong vòng bullseye (<= 1) thì 10 điểm
  if(distance <= 1)
    return 10;

  // Nếu trong vòng trong (<= 5) thì 5 điểm
  if(distance <= 5)
    return 5;

  if(distance <= 10)
    return 1;

  return 0;
}
