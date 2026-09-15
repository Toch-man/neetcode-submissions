class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity= capacity
        this.size = 0
        this.arr =  new Array(capacity).fill(0)
    }
        
    /**
     * @param {number} i
     * @returns {number}
     */
    
    get(i) {
        return this.arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i]=n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.size == this.capacity){
            this.resize()
        }
        this.arr[this.size] = n
        this.size++
    }

    /**
     * @returns {number}
     */
    popback() {
        this.size--
      return this.arr[this.size]
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}