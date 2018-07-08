function move(command) {
    let selected;
    if (command === "right") {
        selected = $('#available-towns').find(":selected");
        selected.remove();
        $('#selected-towns').append($(`<option>${selected.text()}</option>`))
    } else if (command === "left") {
        selected = $('#selected-towns').find(":selected");
        selected.remove();
        $('#available-towns').append($(`<option>${selected.text()}</option>`))
    } else{
        let allTowns = $("#selected-towns option").toArray().map(e => $(e).text());
        $("#output").text(allTowns.join("; "))
    }
}