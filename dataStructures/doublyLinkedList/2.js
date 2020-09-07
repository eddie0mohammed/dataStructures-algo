
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

    push = (value) =>  {
        let newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    pop = () => {
        if (!this.head) return null;
        let current = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = current.previous;
            this.tail.next = null;
            current.previous = null;
        }
        this.length = this.length - 1;
        return current;
    }

    shift = () => {
        if(!this.head) return null;
        if (this.length === 1){
            this.length = null;
            this.tail = null;
        }else{
            let current = this.head;
            this.head = current.next;
            current.next = null;
            this.head.previous = null;
        }
        this.length = this.length - 1;
        return current;
    }

    unshift = (val) => {
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.length = this.length + 1;
        return this;
    }
}

