const A = [3, 6, 8, 5, 9, 9, 4, 8, 4, 7];
const B = [5, 1, 0, 1, 6, 4, 1, 7, 4, 3];
k = 9;

function permute(A, B, k) {
  const Aasc = A.sort((a, b) => a - b);
  const Bdesc = B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

console.log(permute(A, B, k));
