//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  // Khởi tạo List, Lưu mảng bên trong
  constructor(values = []) {
    this.values = [...values];
  }

  // Nối list này với list khác, trả về list mới
  append(other) {
    return new List([...this.values, ...other.values]);
  }

  // Nối list này với một list chứa nhiều list (1 cấp), trả về List mới
  concat(lists) {
    let result = [...this.values];
    for (const l of lists.values) {
      if (l instanceof List) {
        result.push(...l.values);
      }else {
      result.push(l);
      }
    }
    return new List(result);
  }

  // Lọc các phần tử thỏa predicate, trả về List mới
  filter(fn) {
    const filtered = [];
    for (const v of this.values) {
      if (fn(v)) filtered.push(v);
    }
    return new List(filtered);
  }

  // Áp dụng hàm map lên từng phần tử, trả về List mới
  map(fn) {
    const mapped = [];
    for (const v of this.values) {
      mapped.push(fn(v));
    }
    return new List(mapped);
  }

  // Trả về phần tử trong list
  length() {
    let len = 0;
    for (const _ of this.values) {
      len++;
    }
    return len;
  }

  // Fold (reduce) từ trái sang phải
  foldl(fn, init) {
    let acc = init;
    for (const v of this.values) {
      acc = fn(acc, v);
    }
    return acc;
  }

  foldr(fn, init) {
    let acc = init;
    for (let i = this.values.length - 1; i >= 0; i--) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    const reversed = [];
    for (let i = this.values.length - 1; i >= 0; i--) {
      reversed.push(this.values[i]);
    }
    return new List(reversed);
  }
}
