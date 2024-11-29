const reverweLinkedList = (llist) => {
  let prev = null;
  let curr = llist;
  let next;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
