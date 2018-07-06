function tableBuilder(selector) {
    function createTable(input) {
        $(selector).empty();

        $(selector).append($("<table>"));
        let tr = $("<tr>");
        for (let e of input) {
            tr.append($(`<th>`).text(e))
        }
        tr.append("<th>Action</th>").appendTo($(selector + " table"));
    }

    function fillData(matrix) {
        for (let arr of matrix) {
            let tr = $("<tr>");
            for (let e of arr) {
                tr.append($(`<td>`).text(e))
            }
            tr.append($("<td>")
                .append($("<button>Delete</button>"))
                .on("click", deleteFunc))
                .appendTo($(selector + " table"));
        }
    }
    return {createTable, fillData};

    function deleteFunc() {
        $(this).parent().remove()
    }
}