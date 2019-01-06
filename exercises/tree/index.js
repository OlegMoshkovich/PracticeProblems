// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data){
    this.data = data;
    this.children =[];
  }
  add(data){
    this.children.push(new Node(data))
  }
  remove(data){
    //remove with the filter helper
    this.children = this.children.filter( element => {
      return element.data !== data;
    })
    // // use the for loop
    // let counter = 0
    // for(let child of this.children){
    //   if (child.data === data){
    //     return this.children.splice(counter,1)
    //   }
    //   counter ++;
    // }
  }
}

class Tree {
  constructor(){
    // when the tree is created the root property is empty
    this.root = null;
  }
  traverseBF(fn){
    const arr = [this.root]
    while(arr.length !== 0){
      const node = arr.shift();
      //es6 spread operator implimentation
      arr.push(...node.children)
      // //classing for loop implimentation
      // for(let child of node.children){
      //   arr.push(child);
      // }
      fn(node)

    }
  }


}

module.exports = { Tree, Node };
