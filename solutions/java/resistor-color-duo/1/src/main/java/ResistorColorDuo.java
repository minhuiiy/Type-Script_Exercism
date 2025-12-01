class ResistorColorDuo {
    
    private final String[] colorList = {
        "black", "brown", "red", "orange", "yellow", 
        "green", "blue", "violet", "grey", "white"
    };
    
    int value(String[] colors) {
        int first = colorCode(colors[0]);
        int second = colorCode(colors[1]);

        return first * 10 + second;
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
