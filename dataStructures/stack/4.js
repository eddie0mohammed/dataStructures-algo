class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push = (val) => {
        let newNode = new Node(val);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        }else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.size = this.size + 1;
        return this;
    }

    pop = () => {
        if (!this.first) return null;

        let current = this.first;
        this.first = current.next;
        current.next = null;
        this.size = this.size - 1;
        if (this.size === 0){
            this.first = null;
            this.last = null;
        }
        return current;
    }
}