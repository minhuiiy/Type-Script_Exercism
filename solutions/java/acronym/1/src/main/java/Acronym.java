class Acronym {

    private final String phrase;

    Acronym(String phrase) {
        this.phrase = phrase;
    }

    String get() {
        StringBuilder result = new StringBuilder();

        String cleaned = phrase.replace("-", " ");

        String[] words = cleaned.split("\\s+");

        for (String word : words) {

            word = word.replaceAll("^[^A-Za-z]+", "");

            if (!word.isEmpty()) {
                result.append(Character.toUpperCase(word.charAt(0)));
            }
        }

        return result.toString();
    }
}
