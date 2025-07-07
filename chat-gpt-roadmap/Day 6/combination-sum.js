function combinationSum(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b); // Sort to optimize

  function backtrack(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remaining) break; // Optimization

      current.push(candidates[i]);
      backtrack(i, current, remaining - candidates[i]); // Note: pass 'i' not 'i+1' to allow reuse
      current.pop(); // Backtrack
    }
  }

  backtrack(0, [], target);
  return result;
}
console.log(combinationSum([2, 3, 6, 7], 7));
