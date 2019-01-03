// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');
const queue1 = new Queue;
const queue2 = new Queue;
queue1.add(1);
queue1.add(2);
queue1.add(3);
queue1.add(4);
queue1.add(5);
queue2.add('hello');
queue2.add('there');
function weave(sourceOne, sourceTwo) {
  console.log('first queue'+sourceOne.data.length)
  const joinedQueue = new Queue;
  while(sourceOne.peek() || sourceTwo.peek()){
      if (sourceOne.peek()){
        joinedQueue.add(sourceOne.remove())
      }
      if (sourceTwo.peek()){
        joinedQueue.add(sourceTwo.remove())
      }
    }
  console.log(joinedQueue)
  return joinedQueue
  }
weave(queue1,queue2)
module.exports = weave;
