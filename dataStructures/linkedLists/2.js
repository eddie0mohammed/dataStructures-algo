
class Node {
    constructor(value){
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
            return null;
        }
        let current = this.head;
        let newTail = current;
        while (current.next){
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
        let oldHead = this.head;
        this.head = oldHead.next;
        oldHead.next = null;
        this.length = this.length - 1;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return oldHead;
    }

    unshift = (val) => {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length = this.length + 1;
        return this;
    }

    printList = () => {
        let current = this.head;
        while (current.next !== null){
            console.log(current.value);
            console.log('->');
            current = current.next;
        }

        console.log(current.value);
        console.log(this.length);
    }
}


const list = new SinglyLinkedList();
console.log(list);

console.log('#####PUSH#####');
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));

// console.log('#####SHIFT#####');
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());

console.log('#####UNSHIFT#####');
console.log(list.unshift(10));
console.log(list.unshift(11));

console.log(list.printList());

// console.log('#####POP#####');
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// console.log(list);
