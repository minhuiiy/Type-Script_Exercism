import java.util.*;
import java.util.stream.Collectors;

class HighScores {
    private final List<Integer> scores;
    
    public HighScores(List<Integer> highScores) {
        this.scores = new ArrayList<>(Objects.requireNonNull(highScores));
    }

    List<Integer> scores() {
        return Collections.unmodifiableList(scores);
    }

    Integer latest() {
        if(scores.isEmpty()) return null;
        return scores.get(scores.size() - 1);
    }

    Integer personalBest() {
        if(scores.isEmpty()) return null;
        return Collections.max(scores);
    }

    List<Integer> personalTopThree() {
        return scores.stream()
            .sorted(Comparator.reverseOrder())
            .limit(3)
            .collect(Collectors.toList());
    }
}
