function hasCycle(node, parent, visited, graph) {
  visited.add(node);
  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      if (hasCycle(neighbor, node, visited, graph)) return true;
    } else if (neighbor !== parent) {
      return true;
    }
  }
  return false;
}
