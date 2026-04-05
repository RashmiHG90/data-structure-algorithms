
// top = -1
//push 10, top = 0
//push 20, top = 1
//when we pop, top-- so its 10.. we don't actually remove the element 
// from stack but we just decrease the top pointer and return the value at top pointer
//because removing is expensive operation in stack as we have to shift all the elements 
// to left after removing the element from stack
// or in other words we need to create new array and copy all the elements +1
//this will cause memory issue, insertion and deletion will take more time and memory
// so array is preferred for retrieve purpose but not for insert and delete purpose in stack
// but we can go with linked list implementation of stack for insert
//  and delete(not for retrieve) purpose as it will take less time and memory

class Stack{
    constructor(){
        this.stack = []; // array implementation
    }

    push(data){
        if(this.stack.length<5){
            this.stack.push(data);
            console.log("Data added to stack: " + data);
        } else{
            console.log("Stack overflow");
        }
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty or underflow");
        } else{
            let removedData = this.stack.pop();
            console.log("Data removed from stack: " + removedData);
            //return removedData;
        }
    }

    isEmpty(){
        return this.stack.length === 0;
    }

     peek(){
        if(this.isEmpty()){
            console.log("Stack is empty or underflow");
        } else{
            let topData = this.stack[this.stack.length - 1];
            console.log("Top data in stack: " + topData);
            //return topData;
        }
    }

    size(){
        return this.stack.length;
    }

}

let ss = new Stack();
ss.pop(); // stack underflow
ss.push(10);
ss.push(20);
ss.push(30);
ss.push(40);
ss.push(50);
ss.push(60);
console.log(ss.stack)
ss.pop();

console.log(ss.stack)
console.log("Top most element in stack: " + ss.peek())
console.log("Size of stack: " + ss.size())