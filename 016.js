// Pure
function sum(a, b) {
  return a + b;
}

// Impure (function has side effects / function depends on external state)
let count = 0;

function incrementCount() {
  count++;
  return count;
}
