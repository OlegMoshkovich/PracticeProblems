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
    let node = this.head;
    let counter = 0;
      while (node){
        counter++;
        node = node.next;
      }
      return counter
    }

  getFirst (){
    return this.head
  }

  getLast(){
    let node = this.head;
    while (node){
      if(node.next){
        node = node.next;
      }else{
        return node
      }
    }
  }
  clear(){
    return this.head = null
  }
  removeFirst(){
  if(!this.head){
    return
  }
  this.head = this.head.next;
  }

}

const list = new LinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertFirst(4);
list.insertFirst(5);
list.removeFirst();

list.size();



module.exports = { Node, LinkedList };
