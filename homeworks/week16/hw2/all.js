// Stack: last in, first out
function Stack() {
  const arr = [];
  return {
    push: (item) => {
      arr[arr.length] = item;
      return arr;
    },
    pop: () => {
      const result = arr[arr.length - 1]; // 印出拿掉的值
      arr.splice(arr.length - 1, 1);
      return result;
    },
  };
}

// Queue: first in, first out
function Queue() {
  const arr = [];
  return {
    push: (item) => {
      arr[arr.length] = item;
    },
    pop: () => {
      const result = arr[0];
      arr.splice(0, 1);
      return result;
    },
  };
}

const stack = new Stack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // 5
console.log(stack.pop()); // 10

const queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
