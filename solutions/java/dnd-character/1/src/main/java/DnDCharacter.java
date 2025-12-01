import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

class DnDCharacter {
    private final int strength;
    private final int dexterity;
    private final int constitution;
    private final int intelligence;
    private final int wisdom;
    private final int charisma;
    private final int hitpoints;

    public DnDCharacter() {
        this.strength = ability(rollDice());
        this.dexterity = ability(rollDice());
        this.constitution = ability(rollDice());
        this.intelligence = ability(rollDice());
        this.wisdom = ability(rollDice());
        this.charisma = ability(rollDice());
        this.hitpoints = 10 + modifier(this.constitution);
        
    }
    
    int ability(List<Integer> scores) {
        int sum = 0;
        int min = Integer.MAX_VALUE;
        for(int v : scores) {
            sum += v;
            if(v < min) min = v;
        }
        return sum -min;
    }

    List<Integer> rollDice() {
        List<Integer> rolls = new ArrayList<>(4);
        for(int i = 0; i < 4; i++) {
            rolls.add(ThreadLocalRandom.current().nextInt(1, 7));
        }
        return rolls;
    }

    int modifier(int input) {
        return Math.floorDiv(input - 10, 2);
    }

    int getStrength() {
        return strength;
    }

    int getDexterity() {
        return dexterity;
    }

    int getConstitution() {
        return constitution;
    }

    int getIntelligence() {
        return intelligence;
    }

    int getWisdom() {
        return wisdom;
    }

    int getCharisma() {
       return charisma;
    }

    int getHitpoints() {
        return hitpoints;
    }
}
