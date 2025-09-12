export class DnDCharacter {
  // Thuộc tính ability scores
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    // Tạo 6 ability scores ngẫu nhiên
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    // Hitpoints = 10 + constitution modifier
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  // Hàm tung xúc xắc 6 mặt (1–6)
  private static rollDie(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Hàm tạo ability score: roll 4d6, bỏ nhỏ nhất, cộng 3 cái còn lại
  public static generateAbilityScore(): number {
    const rolls = [
      this.rollDie(),
      this.rollDie(),
      this.rollDie(),
      this.rollDie(),
    ];
    rolls.sort((a, b) => a - b); // sắp xếp tăng dần
    rolls.shift(); // bỏ số nhỏ nhất
    return rolls.reduce((sum, val) => sum + val, 0);
  }

  // Hàm tính modifier từ ability value
  public static getModifierFor(abilityValue: number): number {
    if (abilityValue < 3) {
      throw new Error("Ability scores must be at least 3");
    }
    if (abilityValue > 18) {
      throw new Error("Ability scores can be at most 18");
    }
    return Math.floor((abilityValue - 10) / 2);
  }
}
