class ResistorColorTrio {

    private final String[] colorList = {
        "black", "brown", "red", "orange", "yellow",
        "green", "blue", "violet", "grey", "white"
    };
    
    String label(String[] colors) {
        int first = colorCode(colors[0]);
        int second = colorCode(colors[1]);
        int multiplierExp = colorCode(colors[2]);

        long multiplier = pow10(multiplierExp);
        long value = (first * 10 + second) * multiplier;

        if (value >= 1_000_000_000L) {
            return (value / 1_000_000_000L) + " gigaohms";
        } else if (value >= 1_000_000L) {
            return (value / 1_000_000L) + " megaohms";
        } else if (value >= 1_000L) {
            return (value / 1_000L) + " kiloohms";
        } else {
            return value + " ohms";
        }  
    }

    private long pow10(int exp) {
        long r = 1;
        for(int i = 0; i < exp; i++) {
            r *= 10L;
        }
        return r;
    }
    
    private int colorCode(String color) {
        for(int i = 0; i < colorList.length; i++) {
            if(colorList[i].equals(color)) {
                return i;
            }
        }
        throw new IllegalArgumentException("Invalid color: " + color);
    }
}
