function move(direction) {
    let selected = $("#towns").find(":selected");
    let next = selected.next();
    let prev = selected.prev();

    if (direction === -1) {
        selected.insertBefore(selected.prev());
    }
    if (direction === 1) {
        selected.insertAfter(selected.next());
    }
}