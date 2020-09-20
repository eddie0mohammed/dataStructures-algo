
class Node {
    constructor(value) {
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
        }else {
            let current = this.root;
            while (true){
                if (current.value === val) return this;
                if (val < current.value){
                    if (current.left){
                        current = current.left;
                    }else{
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

    BFS_POST_ORDER = () => {
        const data = [];
        let current = this.root;
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
}

            
//             8
//     4               11
// 1       3    10         12


const tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);


console.log(tree.BFS_POST_ORDER());