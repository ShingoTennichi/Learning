class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Binary_Search_Tree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let new_Node = new Node(data);
        if(this.root === null) {
            this.root = new_Node;
        } else {
            this.insert_Node (this.root, new_Node);
        }
    }

    insert_Node(node,new_Node) {
        if(new_Node.data <node.data) {
            if(node.left === null) {
                node.left = new_Node;
            } else {
                this.insert_Node(node.left,new_Node);
            }
        } else {
            if (node.right === null) {
                node.right = new_Node;
            } else {
                this.insert_Node(node.right,new_Node)
            }
        }
    }
    remove(data) {
        this.root = this.remove_Node(this.root, data);
    }
    remove_Node(node, key) {
        if(node === null) {
            return null;
        } else if(key <node.data) {
            node.left = this.remove_Node(node.left, key);
            return node;
        } else if(key > node.data) {
            node.right = this.remove_Node(node.right,key)
            return node;
        } else {
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            }
            let aux = this.find_Min_Node(node.right);
            node.data = aux.data;
            node.right = this.remove_Node(node.right, aux.data);
            return node;
        }
    }
    in_order(node) {
        if(node !== null) {
            this.in_order(node.left);
            console.log(node.data);
            this.in_order(node.right);
        }
    }
    pre_order(node) {
        if(node !== null) {
            console.log(node.data);
            this.pre_order(node.left);
            this.pre_order(node.right);
        }
    }
    post_order(node) {
        if(node !== null) {
            this.post_order(node.left);
            this.post_order(node.right);
            console.log(node.data);
        }
    }
    find_Min_Node(node) {
        if(node.left === null) {
            return node.data;
        } else {
            this.find_Min_Node(node.left);
        }
    }
    get_root_node() {
        return this.root;
    }
    search(node,data) {
        if(node === null) {
            return null;
        } else if(data < node.data) {
            return this.get_root_node(node.left,data);
        } else if(data > data) {
            return this.get_root_node(node.right,data);
        } else {
            return node;
        }

    }
}


// * This is how to use the insert functions.
// let numbers = [7,5,8,3,4,1,9,2,6,10];
// let node_tree = new Binary_Search_Tree()
// for (const number of numbers) {
//     node_tree.insert(number);
// }
// console.dir(node_tree,{depth: null});

// * This is how to use the in_order functions.
// let numbers = [7,5,8,3,4,1,9,2,6,10];
// let node_tree = new Binary_Search_Tree();
// for (const number of numbers) {
//     node_tree.insert(number);
// }
// console.dir(node_tree.in_order(node_tree.root));

// * This is how to use the pre_order functions.
// let numbers = [7,5,8,3,4,1,9,2,6,10];
// let node_tree = new Binary_Search_Tree();
// for (const number of numbers) {
//     node_tree.insert(number);
// }
// console.dir(node_tree.pre_order(node_tree.root));

// * This is how to use the post_order functions.
// let numbers = [7,5,8,3,4,1,9,2,6,10,0.5,7.5,8.5];
// let node_tree = new Binary_Search_Tree();
// for (const number of numbers) {
//     node_tree.insert(number);
// }
// console.dir(node_tree.post_order(node_tree.root));

// * This is how to use the post_order functions.
// let numbers = [7,5,8,3,4,1,9,2,6,10,0.5,7.5,8.5];
// let node_tree = new Binary_Search_Tree();
// for (const number of numbers) {
//     node_tree.insert(number);
// }
// console.dir(node_tree.search(node_tree.root,11),{depth:null});