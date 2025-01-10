function mincost(arr) {
  // Base case: If there is only one rope, the cost is 0
  if (arr.length <= 1) return 0;

  // Create a min-heap (priority queue)
  const heap = new MinHeap();
  for (let length of arr) {
    heap.insert(length);
  }

  let totalCost = 0;

  // Continue until there is only one rope left in the heap
  while (heap.size() > 1) {
    // Extract the two smallest ropes
    const first = heap.extractMin();
    const second = heap.extractMin();

    // Combine the two ropes and calculate the cost
    const cost = first + second;
    totalCost += cost;

    // Add the combined rope back to the heap
    heap.insert(cost);
  }

  return totalCost;
}

// Implementation of a MinHeap (helper class for priority queue)
class MinHeap {
  constructor() {
    this.data = [];
  }

  // Insert a value into the heap
  insert(value) {
    this.data.push(value);
    this._heapifyUp();
  }

  // Extract the minimum value from the heap
  extractMin() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.data.pop();

    const min = this.data[0];
    this.data[0] = this.data.pop();
    this._heapifyDown();
    return min;
  }

  // Get the size of the heap
  size() {
    return this.data.length;
  }

  // Maintain the heap property after insertion
  _heapifyUp() {
    let index = this.data.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.data[index] >= this.data[parentIndex]) break;

      [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]];
      index = parentIndex;
    }
  }

  // Maintain the heap property after extraction
  _heapifyDown() {
    let index = 0;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < this.data.length && this.data[leftChildIndex] < this.data[smallest]) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < this.data.length && this.data[rightChildIndex] < this.data[smallest]) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.data[index], this.data[smallest]] = [this.data[smallest], this.data[index]];
      index = smallest;
    }
  }
}

module.exports=mincost;
