export class Matrix {
  private _rows: number[][];
  private _columns: number[][];

  constructor(matrixString: string) {
    // Tách chuỗi thành từng hàng (row) và chuyển thành số
    this._rows = matrixString
      .split("\n")
      .map(row =>
        row.split(" ").map(num => Number(num))
      );

    // Từ rows tính ra columns
    this._columns = this._rows[0].map((_, colIndex) =>
      this._rows.map(row => row[colIndex])
    );
  }

  // Getter trả về hàng
  get rows(): number[][] {
    return this._rows;
  }

  // Getter trả về cột
  get columns(): number[][] {
    return this._columns;
  }
}
