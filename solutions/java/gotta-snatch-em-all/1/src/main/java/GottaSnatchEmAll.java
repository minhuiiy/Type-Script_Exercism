import java.util.List;
import java.util.Set;
import java.util.HashSet;

class GottaSnatchEmAll {

    static Set<String> newCollection(List<String> cards) {
        Set<String> card = new HashSet<>(cards);
        return card;
    }

    static boolean addCard(String card, Set<String> collection) {
        return collection.add(card);
    }

    static boolean canTrade(Set<String> myCollection, Set<String> theirCollection) {
        if(myCollection.isEmpty() || theirCollection.isEmpty()) return false;

        Set<String> onlyMine = new HashSet<>(myCollection);
        onlyMine.removeAll(theirCollection);

        Set<String> onlyTheir = new HashSet<>(theirCollection);
        onlyTheir.removeAll(myCollection);

        return !onlyMine.isEmpty() && !onlyTheir.isEmpty();
    }

    static Set<String> commonCards(List<Set<String>> collections) {
        if(collections.isEmpty()) return new HashSet<>();

        Set<String> common = new HashSet<>(collections.get(0));

        for(int i = 0; i < collections.size(); i++) {
            common.retainAll(collections.get(i));
        }
        return common;
    }

    static Set<String> allCards(List<Set<String>> collections) {
        Set<String> card = new HashSet<>();

        for(Set<String> c : collections) {
            card.addAll(c);
        }
        return card;
        
    }
}
