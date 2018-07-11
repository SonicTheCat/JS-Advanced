function busRoute() {
    let start = $("input[name='first-stop']");
    let end = $("input[name='last-stop']");
    let num1 = start.val()-1;
    let num2 = end.val()-1;

    let allBusStops = $("#bus-stops li");

    if ((num1 !== "" && num2 !== "") && num1 >= 0 && num2 < allBusStops.length && num1 !== num2 && num1 < num2) {
        let result = $("#selected-bus-stops");
        result.empty();
        for (let i = num1; i <= num2; i++) {
            result.append($("<li>").text(`${allBusStops[i].textContent}`));
            $("#selected-route span").text(`${num1+1}-${num2+1}`);
            start.val("");
            end.val("");
        }
    }
}