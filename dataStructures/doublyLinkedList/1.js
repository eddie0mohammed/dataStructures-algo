
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    printForward = () => {
        let current = this.head;
        if (current ){
        while (current.next !== null){
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
    }
    }

    printReverse = () => {
        let current = this.tail;
        if (current){
        while (current.previous !== null){
            console.log(current.value);
            current = current.previous;
        }
        console.log(current.value);
    }
    }

    push = (val) => {

        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length = this.length + 1;
        // this.printForward();
        // this.printReverse();
        return this;
    }

    pop = () => {
        if (!this.head) return null;
        let current = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            this.tail = current.previous;
            current.previous = null;
            this.tail.next = null;
        }
        this.length = this.length - 1;
        return current;
    }

    shift = () => {
        if (!this.head) return null;

        let current = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = current.next;
            this.head.previous = null;
            current.next = null;
        }
        this.length = this.length - 1;
        // console.log(this);
        return current;
    }

    unshift = (val) => {
        let newNode = new Node(val);

        if (!this.head){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

}


const list = new DoublyLinkedList;

list.push(1);
list.push(2);
list.push(3);

// list.pop();
// list.shift();

console.log(list.unshift(10));