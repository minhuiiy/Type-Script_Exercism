export class Rational {
  constructor(private numerator: number, private denominator: number) {
    if (denominator === 0) throw new Error("Denominator cannot be zero");
  }

  add(r: Rational): Rational {
    return new Rational(
      this.numerator * r.denominator + this.denominator * r.numerator,
      this.denominator * r.denominator
    ).reduce();
  }

  sub(r: Rational): Rational {
    return new Rational(
      this.numerator * r.denominator - this.denominator * r.numerator,
      this.denominator * r.denominator
    ).reduce();
  }

  mul(r: Rational): Rational {
    return new Rational(
      this.numerator * r.numerator,
      this.denominator * r.denominator
    ).reduce();
  }

  div(r: Rational): Rational {
    return new Rational(
      this.numerator * r.denominator,
      this.denominator * r.numerator
    ).reduce();
  }

  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator)).reduce();
  }

  exprational(n: number): Rational {
    if (n >= 0) {
      return new Rational(
        Math.pow(this.numerator, n),
        Math.pow(this.denominator, n)
      ).reduce();
    } else {
      return new Rational(
        Math.pow(this.denominator, -n),
        Math.pow(this.numerator, -n)
      ).reduce();
    }
  }

  expreal(x: number): number {
    return Math.pow(x, this.numerator / this.denominator);
  }

  reduce(): Rational {
    const divisor = gcd(this.numerator, this.denominator);
    let n = this.numerator / divisor;
    let d = this.denominator / divisor;

    // chuẩn hóa: mẫu luôn dương
    if (d < 0) {
      n = -n;
      d = -d;
    }
    return new Rational(n, d);
  }
}

function gcd(a: number, b: number): number {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}
