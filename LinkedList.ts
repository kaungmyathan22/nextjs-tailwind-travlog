export class LinkedList {
  value = "";
  next: null | LinkedList = null;
  constructor(val: string, next: LinkedList | null) {
    this.value = val;
    this.next = next;
  }
}

const node4 = new LinkedList("4", null);
const node3 = new LinkedList("3", node4);
const node2 = new LinkedList("2", node3);
const node1 = new LinkedList("1", node2);

let curNode: LinkedList = node1;
while (curNode.next) {
  console.log(curNode.value);
  curNode = curNode.next;
}
