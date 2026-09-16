class Node {
    constructor(val){
        this.value = val
        this.next = null
    }
}



class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
       let curr = this.head
       let count = 0
       while(curr != null){
        if(count == index){
        return curr.value
        }
        count++
        curr = curr.next
       }
       return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let new_node = new Node(val)
        if(this.size == 0){
           this.head = new_node
           this.size++
           return
        }
        new_node.next = this.head
        this.head = new_node
        this.size++
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
      let curr = this.head
      let last_node;
      if(curr == null){
        this.head = new Node(val)
        this.size++
        return
      }
      while(curr.next !==null){
        curr = curr.next 
      }
       last_node = curr
        last_node.next = new Node(val)
        this.size++
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
       let current = this.head
       let  count = 0
       let prev;
       let index_value;

       if(index == 0 && current !== null){
        this.head = current.next
        this.size--
        return true
       }
       while(current !== null){
        if(count == index-1){
            prev = current
            index_value = prev.next
            if(!index_value){
                return false
            }
            if(index_value.next == null){
                prev.next =null
                this.size--
                return true
            }
            else{
            prev.next = index_value.next
            this.size--
            return true
            }
        }
          current = current.next
       count++
       }
     return false
       }

        /**
     * @return {number[]}
     */
        getValues() {
            const list_array =[]
            let current = this.head
            while(current !== null){
                list_array.push(current.value)
                current= current.next
            }
            return list_array
        }

    }