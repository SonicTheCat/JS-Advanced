let closure = (function listProcessor() {
    let list = [];

    function add(word) {
        list.push(word)
    }

    function remove(word) {
        let index = list.indexOf(word);
        if (index > -1) {
            list.splice(index, 1);
            remove(word);
        }
    }

    function print() {
        console.log(list.toString())
    }

    return function (commands) {
        for (let line of commands) {
            let [command, word] = line.split(/ /);
            switch (command) {
                case "add":add(word);break;
                case "remove":remove(word);break;
                case "print":print();break;
            }
        }
    }
})();

closure(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);

