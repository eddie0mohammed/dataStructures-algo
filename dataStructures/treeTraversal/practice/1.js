
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
        const newNode = new Node(val);
        if (!this.root){
            this.root = newNode;
            return this;
        }else {
            let current = this.root;
            while (true){
                if (val === current.value) return this;
                if (val < current.value){
                    if (current.left){
                        current = current.left;
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
            }else if (val > current.value){
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
        while (queue.length > 0){
            node = queue.shift();
            if (node.left){
                queue.push(node.left);
            }
            if (node.right){
                queue.push(node.right);
            }
            data.push(node.value);
        }
        return data;
    }

    DFS_preOrder = () => {
        if (!this.root) return null;
        let current = this.root;
        let data = [];

        const traverse = (node) => {
            data.push (node.value);
            if (node.left){
                traverse(node.left);
            }
            if (node.right){
                traverse(node.right);
            }
        }
        traverse(current);
        return data;
    }

    DFS_postOrder = () => {
        if (!this.root) return null;
        let current = this.root;
        let data = [];

        const traverse = (node) => {
            if (node.left){
                traverse(node.left);
            }
            if (node.right){
                traverse(node.right);
            }
            data.push(node.value);
        }
        traverse(current);
        return data;
    }

    DFS_inOrder = () => {
        if (!this.root) return null;
        let current = this.root;
        let data = [];

        const traverse = (node) => {
            if (node.left){
                traverse(node.left);
            }
            data.push(node.value);
            if (node.right){
                traverse(node.right);
            }
        } 
        traverse(current);
        return data;
    }
}




const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(14);
tree.insert(20);


// console.log(tree.BFS());
// console.log(tree.DFS_preOrder());
// console.log(tree.DFS_postOrder());
console.log(tree.DFS_inOrder());