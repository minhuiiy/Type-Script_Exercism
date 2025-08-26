//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Bảng giá giảm theo số lượng sách khác nhau
const PRICE_TABLE = {
  1: 800,
  2: 1520,
  3: 2160,
  4: 2560,
  5: 3000
};

export const cost = (books) => {
  if (books.length === 0) return 0;

  // Đếm số lượng từng tập
  const counts = [0, 0, 0, 0, 0];
  for (const b of books) {
    counts[b - 1] += 1;
  }

  // Memoization cache
  const memo = new Map();

  // Hàm đệ quy: truyền vào trạng thái counts (mảng số lượng từng tập)
  const helper = (state) => {
    // Chuẩn hóa state thành string để làm key cache
    const key = state.join(",");
    if (memo.has(key)) return memo.get(key);

    // Nếu hết sách thì chi phí = 0
    if (state.every(x => x === 0)) return 0;

    let best = Infinity;

    // Thử mọi kích thước nhóm từ 1 → 5
    for (let k = 1; k <= 5; k++) {
      // Lấy ra k quyển khác nhau nếu có đủ
      const idxs = state.map((c, i) => c > 0 ? i : -1).filter(i => i >= 0);
      if (idxs.length < k) continue;

      // Chọn k quyển đầu tiên (greedy pick theo chỉ số)
      const choose = idxs.slice(0, k);
      const newState = [...state];
      for (const i of choose) newState[i] -= 1;

      // Tính chi phí nhóm này + phần còn lại
      const price = PRICE_TABLE[k] + helper(newState.sort((a, b) => b - a));

      if (price < best) best = price;
    }

    memo.set(key, best);
    return best;
  };

  return helper(counts.sort((a, b) => b - a));
};
