
class Node {
    constructor(value) {
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

    push = (value) => {
        let newNode = new Node(value);
        newNode.next = this.first;
        this.first = newNode;
        this.size = this.size + 1;
        this.print();
        return this;
    }

    pop = () => {
        let current = this.first;
        this.first = current.next;
        current.next = null;
        this.length = this.length - 1;
        if (this.length === 0) {
            this.first = null;
            this.last = null;
        }
        this.print();
        return current;
    }

    print = () => {
        let current = this.first;
        if (!current) return console.log('null')
        while (current.next){
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
    }
}

const list = new Stack();


console.log('PUSH-----------------');
list.push(1);
console.log('PUSH-----------------');
list.push(2);
console.log('PUSH-----------------');
list.push(3);
console.log('PUSH-----------------');
list.push(4);
console.log('-----------------');
console.log('-----------------');

list.pop();
console.log('POP-----------------');
list.pop();
console.log('POP-----------------');
list.pop();
console.log('POP-----------------');
list.pop();


