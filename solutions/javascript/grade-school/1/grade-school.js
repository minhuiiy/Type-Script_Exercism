export class GradeSchool {
  constructor() {
    this.students = {}; // key = grade, value = array tên
    this.allStudents = new Set(); // để kiểm tra trùng tên
  }

  add(name, grade) {
    // Không thêm nếu học sinh đã tồn tại trong bất kỳ lớp nào
    if (this.allStudents.has(name)) return false;

    if (!this.students[grade]) this.students[grade] = [];
    this.students[grade].push(name);
    this.students[grade].sort();
    this.allStudents.add(name);
    return true;
  }

  roster() {
    const grades = Object.keys(this.students)
                         .map(Number)
                         .sort((a,b) => a-b);
    const result = [];
    for (const grade of grades) {
      result.push(...this.students[grade]);
    }
    return result;
  }

  grade(grade) {
    return this.students[grade] ? [...this.students[grade]] : [];
  }
}
