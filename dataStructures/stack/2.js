
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
        // this.print();
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
        this.print();
        return current;
    }

    print = () => {
        let current = this.first;
        while (current.next) {
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
    }
}


const s = new Stack();

s.push(1);
s.push(2);
s.push(3);
s.push(4);

s.pop();
