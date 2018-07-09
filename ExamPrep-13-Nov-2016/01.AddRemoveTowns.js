function attachEvents() {
    let input = $("#newItem");
    let towns = $("#towns");
    $("#btnAdd").on("click", () => {
        if (input.val() !== "") {
            towns.append($("<option>").text(`${input.val()}`));
            input.val("");
        }
    });
    $("#btnDelete").on("click",() => {
        towns.find(":selected").remove();
    });
}