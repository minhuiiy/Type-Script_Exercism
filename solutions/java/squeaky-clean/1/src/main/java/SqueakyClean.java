class SqueakyClean {
    static String clean(String identifier) {
        if(identifier == null) return "";
        identifier = identifier.replace(' ', '_');
        
        StringBuilder result = new StringBuilder();
        boolean nextUpper = false;
        for(int i = 0; i < identifier.length(); i++){
            char c = identifier.charAt(i);

            if(c == '-') {
                nextUpper = true;
                continue;
            }

            switch (c) {
                case '4': c = 'a'; break;
                case '3': c = 'e'; break;
                case '0': c = 'o'; break;
                case '1': c = 'l'; break;
                case '7': c = 't'; break;
            }
            
            if(nextUpper) {
                c = Character.toUpperCase(c);
                nextUpper = false;
            }

            Character.UnicodeBlock b = Character.UnicodeBlock.of(c);
            if(b == Character.UnicodeBlock.GREEK || b == Character.UnicodeBlock.GREEK_EXTENDED) {
                continue;
            }

            if(Character.isLetter(c) || Character.isDigit(c) || c == '_') {
                result.append(c);
            }
        }
        return result.toString();  
    }
}
