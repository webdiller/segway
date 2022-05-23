export function filterProductByStatus(a) {
  if (a.status == 'preorder') {
    return -1;
  }
  if (a.status == 'in-stock') {
    return -1;
  }
  if (a.status == 'out-of-stock') {
    return 1;
  }
  return 0;
}