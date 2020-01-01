var copyRandomList = function(head) {
    let dic = new Map()
    dic.set(null, null)

    if (!head) {
        return null
    }

    let curr = head
    while (curr) {
        dic.set(curr, new Node(curr.val, null, null))
        curr = curr.next
    }

    curr = head
    while (curr) {
        dic.get(curr).next = dic.get(curr.next)
        dic.get(curr).random = dic.get(curr.random)
        curr = curr.next
    }

    return dic.get(head)
};
