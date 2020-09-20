
class Node {
    constructor(value) {
        this.value = value;
        this.left = left;
        this.right = right;
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
            let current = newNode;
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