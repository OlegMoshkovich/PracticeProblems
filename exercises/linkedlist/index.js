// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next=null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insertFirst(data){
    this.head = new Node(data,this.head);
  }
  size(){
    let node = this.head.next;
    let size =1;
      while (node){
        node = node.next;
        size ++;
      }
      console.log(size)
    }
}

const list = new LinkedList();


list.size();



module.exports = { Node, LinkedList };
