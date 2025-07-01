function kruskalMST(n, edges) {
  edges.sort((a, b) => a[2] - b[2]); // [u, v, weight]
  const uf = new UnionFind(n);
  let cost = 0;

  for (let [u, v, w] of edges) {
    if (uf.union(u, v)) {
      cost += w;
    }
  }

  return cost;
}
