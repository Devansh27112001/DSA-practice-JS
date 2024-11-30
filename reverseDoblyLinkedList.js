const reversed = (head) => {
  let current = head;
  let temp = null;
  while (current !== null) {
    [current.next, current.prev] = [current.prev, current.next];
    temp = current;
    current = current.prev;
  }
  return temp;
};
