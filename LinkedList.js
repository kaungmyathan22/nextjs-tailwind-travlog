"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var LinkedList = /** @class */ (function () {
    function LinkedList(val, next) {
        this.value = "";
        this.next = null;
        this.value = val;
        this.next = next;
    }
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var node4 = new LinkedList("4", null);
var node3 = new LinkedList("3", node4);
var node2 = new LinkedList("2", node3);
var node1 = new LinkedList("1", node2);
var curNode = node1;
while (curNode.next) {
    console.log(curNode.value);
    curNode = curNode.next;
}
