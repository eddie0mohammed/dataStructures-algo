
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert = (val) => {
        let newNode = new Node(val);
        if (!this.root){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            if (current.value === val) return null;
            while (true){
                if (val < current.value){
                    if (current.left){
                        current = current.left
                    }else {
                        current.left = newNode;
                        return this;
                    }
                }else {
                    if (current.right){
                        current = current.right;
                    }else {
                        current.right = newNode;
                        return this;
                    }
                }
            }
        }
    }

    find = (val) => {
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while (current && !found){
            if (current.value === val){
                found = true;
            }else if (val < current.value){
                current = current.left;
            }else if (val > current.right){
                current = current.right;
            }
        }
        if (!found) return false;
        return current;
    }

    BFS = () => {
        if (!this.root) return null;
        let node = this.root;
        let queue = [];
        let data = [];

        queue.push(node);
        while (queue.length){
            node = queue.shift();
            data.push(node.value);
            if (node.left){
                queue.push(node.left);
            }
            if (node.right){
                queue.push(node.right);
            }
        }
        return data;
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// console.log(tree);

console.log(tree.BFS());