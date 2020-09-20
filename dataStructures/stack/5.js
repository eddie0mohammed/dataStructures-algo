
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    push = (val) => {
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    pop = () => {
        if (!this.head) return null;
        let current = this.head;
        this.head = current.next;
        current.next = null;
        this.length = this.length - 1;
        if (this.length === 0){
            this.head = null;
        }
        return current;
    }
    
    print = () => {
        let current = this.head;
        while (current.next){
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
s.push(5);

s.pop();
s.pop();
s.print();

