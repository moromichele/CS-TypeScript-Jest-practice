type MyNode<T> = {
    value: T;
    next: null | MyNode<T>;
}

interface ILinkedList<T> {
    append(value: T): void;
    prepend(value: T): void;
    size(): number;
    head(): T;
    tail(): T;
    nodeAt(i: number): MyNode<T>;
    pop(): MyNode<T>;
    contains(value: T): boolean;
    find(value: T): number;
    insertAt(i: number, value: T): number;
    removeAt(i: number): number;
    toString(): string;
}

class LinkedList<T> implements ILinkedList<T> {
    private HEAD: MyNode<T> = null;
    private TAIL: MyNode<T> = null;
    private length: number = 0;

    public append = (value: T): void => {
        const newNode: MyNode<T> = { value: value, next: null };

        if (!this.HEAD) {
            this.HEAD = newNode;
            this.TAIL = this.HEAD;
        } else {
            this.TAIL.next = newNode;
            this.TAIL = newNode;
        }
        this.length++;
    };

    public prepend = (value: T): void => {
        const newNode: MyNode<T> = { value: value, next: null };
        if (!this.HEAD) {
            this.HEAD = newNode;
            this.TAIL = this.HEAD;
        } else {
            newNode.next = this.HEAD;
            this.HEAD = newNode;
        }
        this.length++;
    };

    public size = (): number => {
        return this.length;
    };

    public head = (): T => {
        if (!this.HEAD) return null;
        return this.HEAD.value;
    };

    public tail = (): T => {
        if (!this.HEAD) return null;
        return this.TAIL.value;
    };

    public nodeAt = (i: number): MyNode<T> => {
        if (i > this.length - 1 || i < 0) return null;
        if (!this.HEAD) return null;
        let x: number = 0;
        let curr: MyNode<T> = this.HEAD;
        while (true) {
            if (i === x) return curr;
            curr = curr.next;
            x++;
        }
    };

    public pop = (): MyNode<T> => {
        if (!this.HEAD) return null;
        if (this.HEAD === this.TAIL) {
            const retNode: MyNode<T> = this.HEAD;
            this.HEAD = null;
            this.TAIL = null;
            this.length--;
            return retNode;
        }

        this.nodeAt(this.length - 2).next = null;
        this.TAIL = this.nodeAt(this.length - 2);
        this.length--;
        return this.TAIL;
    };

    public contains = (v: T): boolean => {
        if (!this.HEAD) return false;

        let curr: MyNode<T> = this.HEAD;

        while (curr !== this.TAIL) {
            if (curr.value === v) {
                return true;
            }
            curr = curr.next;
        }

        return curr.value === v ? true : false;
    };

    //return index if found, -1 if not found
    public find = (v: T): number => {
        if (!this.HEAD) return -1;

        let curr: MyNode<T> = this.HEAD;
        let x: number = 0;
        while (curr !== this.TAIL) {
            if (curr.value === v) {
                return x;
            }
            curr = curr.next;
            x++;
        }

        return curr.value === v ? this.length - 1 : null;
    };

    //return index of insertion if success, -1 if fail
    public insertAt = (i: number, v: T): number => {
        if (i < 0 || i > this.length || (i != 0 && !this.HEAD)) {
            return -1;
        }

        let x: number = 0;

        if (i === 0) {
            this.prepend(v);
            return i;
        }

        if (i === this.length) {
            this.append(v);
            return i;
        }


        const prevNode: MyNode<T> = this.nodeAt(i - 1);
        if (!prevNode) return -1
        const nextNode: MyNode<T> = this.nodeAt(i);
        if (!nextNode) {
            return -1
        }
        const newNode: MyNode<T> = { value: v, next: nextNode };
        prevNode.next = newNode;
        this.length++;
        return i;
    };


    //returns -1 if fail, i if success
    public removeAt = (i: number): number => {
        if (i < 0 || i > this.length - 1 || (i != 0 && !this.HEAD)) {
            return -1;
        }

        let curr: MyNode<T> = this.HEAD;
        let x: number = 0;

        if (i === 0) {
            this.HEAD = this.HEAD.next;
            this.length--;
            return i;
        }

        if (i === this.length - 1) {
            if (this.pop()) return i
            return -1;
        }

        const newNode: MyNode<T> = this.nodeAt(i - 1);
        if (!newNode) return -1
        const nextNode: MyNode<T> = this.nodeAt(i + 1);
        if (!nextNode) {
            return -1
        }
        newNode.next = nextNode;
        this.length--;
        return i;
    };

    public toString = (): string => {
        if (!this.HEAD) {
            return "Empty list";
        } else {
            let curr: MyNode<T> = this.HEAD;
            let retString: string = "";
            while (true) {
                retString = retString + "( " + curr.value + " )" + " -> ";
                if (curr === this.TAIL) return retString + " null";
                curr = curr.next;
            }
        }
    };

};

export default LinkedList;