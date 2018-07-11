function listBuilder(selector) {

    return {
        createNewList: function () {
            $(selector).empty().append($("<ul>"));
        },
        addItem: function (item) {
            $(selector + " ul")
                .append($("<li>").text(`${item}`)
                    .append($("<button>Up</button>").click(moveRowUp))
                    .append($("<button>Down</button>").click(moveRowDown)));

            function moveRowUp() {
                let row = $(this).parent();
                row.insertBefore(row.prev());
            }

            function moveRowDown() {
                let row = $(this).parent();
                row.insertAfter(row.next());
            }
        }
    }
}