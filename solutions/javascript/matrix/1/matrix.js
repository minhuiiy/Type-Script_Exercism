//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    this._rows = input
      .split("\n")
      .map(line => line.split(" ").map(num => Number(num)));
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._rows[0].map((_, colIndex) =>
      this._rows.map(row => row[colIndex])
    );
  }
}

