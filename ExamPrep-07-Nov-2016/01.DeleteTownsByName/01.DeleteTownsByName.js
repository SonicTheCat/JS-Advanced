function attachEvents() {
    $("#btnDelete").on("click", deleteTown);

    function deleteTown() {
        let towns = $("#towns option");
        let input = $("#townName").val();
        let flag = false;

        for (let e of towns) {
            if ($(e).text() === input) {
                $(e).remove();
                $("#result").text(`${input} deleted.`);
                flag = true;
            }
        }

        if (!flag) {
            $("#result").text(`${input} not found.`);
        }
        $("#townName").val("");
    }
}