import java.util.*;

class RelativeDistance {

    private final Map<String, Set<String>> graph = new HashMap<>();

    RelativeDistance(Map<String, List<String>> familyTree) {
        if (familyTree == null) return;

        for (Map.Entry<String, List<String>> e : familyTree.entrySet()) {
            String parent = e.getKey();
            graph.computeIfAbsent(parent, k -> new HashSet<>());

            List<String> children = e.getValue();
            if (children == null || children.isEmpty()) continue;

            for (String child : children) {
                if (child == null) continue;
                graph.computeIfAbsent(child, k -> new HashSet<>());
                addNeighbor(parent, child); 
                addNeighbor(child, parent);
            }

            int n = children.size();
            for (int i = 0; i < n; i++) {
                String ci = children.get(i);
                if (ci == null) continue;
                for (int j = i + 1; j < n; j++) {
                    String cj = children.get(j);
                    if (cj == null) continue;
                    addNeighbor(ci, cj);
                    addNeighbor(cj, ci);
                }
            }
        }
    }

    private void addNeighbor(String u, String v) {
        graph.get(u).add(v);
    }

    int degreeOfSeparation(String personA, String personB) {
        if (personA == null || personB == null) return -1;
        if (personA.equals(personB)) return 0;
        if (!graph.containsKey(personA) || !graph.containsKey(personB)) return -1;

        Queue<String> q = new ArrayDeque<>();
        Map<String, Integer> dist = new HashMap<>();
        q.add(personA);
        dist.put(personA, 0);

        while (!q.isEmpty()) {
            String cur = q.poll();
            int d = dist.get(cur);
            for (String nxt : graph.getOrDefault(cur, Collections.emptySet())) {
                if (dist.containsKey(nxt)) continue;
                int nd = d + 1;
                if (nxt.equals(personB)) return nd;
                dist.put(nxt, nd);
                q.add(nxt);
            }
        }
        return -1;
    }
}
