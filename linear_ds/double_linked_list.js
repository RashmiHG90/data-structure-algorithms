class Node{
    constructor(data){
        this.data = data;
        this.prev = null; // poiinter to previous node  
        this.next = null;  // pointer to next node
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null; 
        this.tail = null;  // important for fast insertion at end of list
        this.size=0; 
    }

    append(data){
        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode; 
            this.tail = newNode; // when there is only one node, head and tail both point to same node
        } else {
            newNode.prev = this.tail; // connect new node to old tail
            this.tail.next = newNode; // connect old tail to new node
            this.tail = newNode; // update tail to new node
        }
        this.size++;
    }

    prepend(data){
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode; // when there is only one node, head and tail both point to same node
        } else {
            newNode.next = this.head; // connect new node to old head
            this.head.prev = newNode; // connect old head to new node
            this.head = newNode; // update head to new node
        }   
        this.size++;
    }

    delete(data){
        let current = this.head;

        while(current){
            if(current.data === data){

                //case 1 : only one node in list
                if(current === this.head && current === this.tail){
                    this.head = null;
                    this.tail = null;
                }
                //case 2 : deleting head node
                else if(current === this.head){
                    this.head = current.next; // update head to next node
                    this.head.prev = null; // remove reference to old head
                }
                //case 3 : deleting tail node
                else if(current === this.tail){
                    this.tail = current.prev; // update tail to previous node
                    this.tail.next = null; // remove reference to old tail
                }
                //case 4 : deleting middle node
                else {
                    current.prev.next = current.next; // connect previous node to next node
                    current.next.prev = current.prev; // connect next node to previous node
                }
                this.size--;
                return; // exit after deleting the node
            } 
            current = current.next; // move to next node
        }
    }

    //Traverse forward
    printForward(){
        let current = this.head;
        while(current){
            console.log(current.data); // it will print 5, 10, 20, 30
            current = current.next; // current node value is 10,20,30,null
        }
    }

    //Traverse backward
    printBackward(){
        let current = this.tail;
        while(current){
            console.log(current.data); // it will print 30, 20, 10, 5
            current = current.prev; // current node value is 20,10,5,null
        }
    }
}

let list = new DoubleLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printForward();
list.prepend(5);
list.prepend(1);
list.prepend(4);
console.log("After prepending, forward traversal:");
list.printForward();
console.log("After prepending, backward traversal:");
list.printBackward();
list.delete(20);
console.log("After deleting 20, forward traversal:");
list.printForward();
console.log("After deleting 20, backward traversal:");
list.printBackward();