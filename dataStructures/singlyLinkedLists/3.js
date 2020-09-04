
class Node {
    constructor(value, next){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push = (val) => {
        const newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    pop = () => {
        if (!this.head){
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while (current.next !== null){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length = this.length - 1;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift = () => {
        if (!this.head){
            return undefined;
        }
        let current = this.head;
        this.head = current.next;
        this.length = this.length - 1;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift = (val) => {
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length = this.length + 1;
        return this;
    } 
}

const list = new SinglyLinkedList();

console.log(list);
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));


// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());

console.log(list.unshift(10));
console.log(list.unshift(20));
console.log(list.unshift(30));


console.log(list);