function subtract() {
    let num1 = document.getElementById("firstNumber");
    let num2 = document.getElementById("secondNumber");
    num1.disabled = false;
    num2.disabled = false;
    calc();
    num1.addEventListener("change", subtract);
    num2.addEventListener("change", subtract);
    function calc() {
        document.getElementById("result").textContent = Number(num1.value) - Number(num2.value);
    }

}