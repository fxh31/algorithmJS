// 优先队列
class PriorityQ {
    constructor() {
        this.queue = [];
        this.compareFn = (a, b) => a > b; // 大根堆
    }

    size() {
        return this.queue.length;
    }
    getQueue() {
        return this.queue;
    }
    push(value) {
        this.queue.push(value);
        if (this.size() < 2) return;
        this.bubbleUp(this.size() - 1);
    }
    remove() {
        const value = this.queue[0];
        const p = this.queue.pop();
        if (this.queue.length) {
            this.queue[0] = p;
            this.bubbleDown();
        }
        return value; // 返回栈顶元素
    }
    bubbleUp(index) {
        while (index >= 0) {
            const parent = (index - 1) >> 1;
            if (parent >=0 && this.compareFn(this.queue[index], this.queue[parent])) {
                [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];
                index = parent;
            } else break;
        } 
    }
    bubbleDown(index = 0) {
        const lastIndex = this.size() - 1;
        while (index <= lastIndex) {
            let child = 2 * index + 1; 
            if (child + 1 < this.size() && this.compareFn(this.queue[child + 1], this.queue[child])) { 
                child += 1;
            }
            if (child <= lastIndex && this.compareFn(this.queue[child], this.queue[index])) {
                [this.queue[index], this.queue[child]] = [this.queue[child], this.queue[index]];
                index = child;
            } else break;
        }
    }
}

const pq = new PriorityQ();
const arr = [3, 6, 92, 3, 2]
for (const x of arr) {
  pq.push(x);
}
console.log(pq.queue)