// JavaScript code to demonstrate the working.

// Function to print alternating
// rectangles of 0 and X
function fill0X(m, n) {
  /* k - starting row index
    m - ending row index
    l - starting column index
    n - ending column index
    i - iterator */
  let i,
    k = 0,
    l = 0;

  // Store given number of rows
  // and columns for later use
  let r = m,
    c = n;

  // A 2D array to store
  // the output to be printed
  let a = new Array(m);
  for (let i = 0; i < m; i++) {
    a[i] = new Array(n);
  }

  // Initialize the character
  // to be stored in a[][]
  let x = "X";

  // Fill characters in a[][] in spiral
  // form. Every iteration fills
  // one rectangle of either Xs or Os
  while (k < m && l < n) {
    // Fill the first row from the
    // remaining rows
    for (i = l; i < n; ++i) {
      a[k][i] = x;
    }
    k++;

    // Fill the last column from the
    // remaining columns
    for (i = k; i < m; ++i) {
      a[i][n - 1] = x;
    }
    n--;

    // Fill the last row from the
    // remaining rows
    if (k < m) {
      for (i = n - 1; i >= l; --i) a[m - 1][i] = x;

      m--;
    }

    // Print the first column
    // from the remaining columns
    if (l < n) {
      for (i = m - 1; i >= k; --i) {
        a[i][l] = x;
      }
      l++;
    }

    // Flip character for next iteration
    x = x == "0" ? "X" : "0";
  }

  return a;
}

// Driver Code

console.log(fill0X(3, 4));
console.log(fill0X(4, 4));
console.log(fill0X(5, 6));
