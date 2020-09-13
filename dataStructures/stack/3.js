
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
        const newNode = new Node(val);
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

    print = () => {
        let current = this.first;
        while (current && current.next !== null){
            console.log(current.value);
            current = current.next;
        }
        if (current)
        console.log(current.value);
    }
}


const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);

console.log(s.print());


s.pop();
s.pop();
console.log(s.print());

