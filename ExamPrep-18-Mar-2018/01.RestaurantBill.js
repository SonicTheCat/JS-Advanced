function addProduct() {
    let product = $('input[type=text]')[0];
    let price = $('input[type=number]')[0];

    if ($(product).val() === "" || $(price).val() === "") {
        return
    }
    let total = $("tfoot td")[1];
    total.textContent = Number($(price).val()) + Number(total.textContent);
    $("<tr>")
        .append($("<td>")
            .text($(product).val()))
        .append($("<td>")
            .text($(price).val()))
        .appendTo($("#product-list"));

    $(product).val("");
    $(price).val("");
}