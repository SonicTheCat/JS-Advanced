function getModel() {
    let input1, input2, result;

    function init(selector1, selector2, selectorRes) {
        input1 = $(selector1);
        input2 = $(selector2);
        result = $(selectorRes);
    }

    function add() {
        result.val(+input1.val() + +input2.val());
    }

    function subtract() {
        result.val(+input1.val() - +input2.val());
    }

    return {init, add, subtract}
}