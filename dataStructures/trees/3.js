
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
        }else {
            let current = this.root;
            while (true){
                if (current.value === this.root) return undefined;
                if (val < current.value){
                    if (current.left){
                        current = current.left;
                    }else {
                        current.left = newNode;
                        return this;
                    }
                }else{
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
                current = current.right
            }
        }
        if (!found) return false;
        return current;
    }


    contains = (val) => {
        if (!this.root) return false;
        let current = this.root;
        while (current){
            if (current.value === val){
                return true;
            }else if (val < current.value){
                current = current.left;
            }else if (val > current.value){
                current = current.right;
            }
        }
        return false;
    }
}

//             10
//     5               13
// 1       6       11      15


const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(1);
tree.insert(6);
tree.insert(13);
tree.insert(11);
tree.insert(15);
