function kangaroo(x1, x2, v1, v2) {
  if (v1 <= v2) {
    return "NO";
  }
  let jump = (x2 - x1) / (v1 - v2);
  if (jump % 1 === 0) {
    return "YES";
  }
  return "NO";
}


console.log(kangaroo(0, 3, 4, 2));