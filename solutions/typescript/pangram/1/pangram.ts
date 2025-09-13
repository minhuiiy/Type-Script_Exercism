export function isPangram(sentence: string): boolean {
  // Chuyển toàn bộ câu về chữ thường để dễ so sánh
  const lowerSentence = sentence.toLowerCase();

  // Tạo một tập hợp (Set) để lưu các chữ cái tìm thấy
  const letters = new Set<string>();

  // Duyệt từng ký tự trong câu
  for (const char of lowerSentence) {
    // Nếu ký tự nằm trong a-z thì thêm vào Set
    if (char >= 'a' && char <= 'z') {
      letters.add(char);
    }
  }

  // Một pangram hợp lệ khi Set có đủ 26 chữ cái
  return letters.size === 26;
}
