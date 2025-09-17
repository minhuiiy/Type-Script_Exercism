export class GradeSchool {
  private data: { [key: number]: string[] } = {}

  add(name: string, grade: number): void {
    // Xóa khỏi lớp cũ nếu tồn tại
    for (const g in this.data) {
      this.data[g] = this.data[g].filter(n => n !== name)
    }

    // Thêm vào lớp mới
    if (!this.data[grade]) {
      this.data[grade] = []
    }
    this.data[grade].push(name)
    this.data[grade].sort()
  }

  roster(): { [key: number]: string[] } {
    const copy: { [key: number]: string[] } = {}
    for (const g in this.data) {
      copy[g] = [...this.data[g]]
    }
    return copy
  }

  grade(n: number): string[] {
    return this.data[n] ? [...this.data[n]] : []
  }
}
