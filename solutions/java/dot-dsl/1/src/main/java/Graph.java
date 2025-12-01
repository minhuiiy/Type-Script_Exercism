import java.util.*;

public class Graph {
    private final Map<String, String> attributes;
    private final Map<String, Node> nodes;
    private final List<Edge> edges;

    public Graph() {
        this.attributes = new LinkedHashMap<>();
        this.nodes = new LinkedHashMap<>();
        this.edges = new ArrayList<>();
    }

    public Graph(Map<String, String> attributes) {
        this.attributes = new LinkedHashMap<>(attributes);
        this.nodes = new LinkedHashMap<>();
        this.edges = new ArrayList<>();
    }

    public Collection<Node> getNodes() {
        return nodes.values();
    }

    public Collection<Edge> getEdges() {
        return edges;
    }

    public Graph node(String name) {
        nodes.put(name, new Node(name));
        return this;
    }

    public Graph node(String name, Map<String, String> attributes) {
        nodes.put(name, new Node(name, attributes));
        return this;
    }

    public Graph edge(String start, String end) {
        edges.add(new Edge(start, end));
        return this;
    }

    public Graph edge(String start, String end, Map<String, String> attributes) {
        edges.add(new Edge(start, end, attributes));
        return this;
    }

    public Map<String, String> getAttributes() {
        return attributes;
    }
}
