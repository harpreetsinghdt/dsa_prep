function dijkstra(graph, start) {
  const dist = {};
  const visited = new Set();
  const minHeap = [[0, start]]; // [distance, node]

  for (let node in graph) dist[node] = Infinity;
  dist[start] = 0;

  while (minHeap.length > 0) {
    minHeap.sort((a, b) => a[0] - b[0]); // mimic min-heap
    const [currentDist, u] = minHeap.shift();
    if (visited.has(u)) continue;
    visited.add(u);

    for (let [v, weight] of graph[u]) {
      if (!visited.has(v) && currentDist + weight < dist[v]) {
        dist[v] = currentDist + weight;
        minHeap.push([dist[v], v]);
      }
    }
  }

  return dist;
}
