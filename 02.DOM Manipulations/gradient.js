function attachGradientEvents() {
    let gradient = document.getElementById("gradient");

    gradient.addEventListener("mousemove", gradientMove);
    gradient.addEventListener("mouseout", gradientOut);

    function gradientMove(event) {
        console.log(event);
        let percent = event.offsetX / (event.target.clientWidth - 1);
        percent = Math.trunc(percent * 100);
        document.getElementById("result").textContent = percent + "%";
    }

    function gradientOut() {
        document.getElementById("result").textContent = "";
    }
}