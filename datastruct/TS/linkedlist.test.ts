import LinkedList from "./linkedlist";

test('linked list', () => {
    const myLinkedList = new LinkedList();
    myLinkedList.append('christian'); //c
    
    expect(myLinkedList.size()).toBe(1);
    expect(myLinkedList.find('christian')).toBe(0);

    myLinkedList.append(1); //c 1
    myLinkedList.pop(); //c

    expect(myLinkedList.size()).toBe(1);
    expect(myLinkedList.find('christian')).toBe(0);

    myLinkedList.prepend(10);  //10 c

    expect(myLinkedList.size()).toBe(2);
    expect(myLinkedList.find('christian')).toBe(1);

    myLinkedList.append(22); //10 c 22

    expect(myLinkedList.size()).toBe(3);
    expect(myLinkedList.tail()).toBe(22)

    myLinkedList.insertAt(2, 55); //10 c 55 22

    expect(myLinkedList.size()).toBe(4);
    expect(myLinkedList.find(55)).toBe(2);

    myLinkedList.removeAt(0); //c 55 22

    expect(myLinkedList.size()).toBe(3);
    expect(myLinkedList.head()).toBe('christian');
    expect(myLinkedList.contains(55)).toBe(true);
    expect(myLinkedList.contains(1)).toBe(false);
});