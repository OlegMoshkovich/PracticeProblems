// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
  this.data = [];
  }
  remove(){
    return this.data.pop()
    // want to return the record so we can work with the record that we just removed
  }
}
Queue.prototype.add = function(record){
    this.data.unshift(record)
    console.log(this.data)
}
Queue.prototype.remove = function(){
    return this.data.pop()
    console.log(this.data)
}
const q = new Queue();
q.add(1);
const last = q.remove()
console.log(last)
module.exports = Queue;
