document.addEventListener("DOMContentLoaded", () => {
    const flexContainer = document.querySelector(".flex-container");
    const gapInput = document.getElementById("gap");
    const flexDirections = document.querySelectorAll(".flex-direction");
    const justifyContentButtons = document.querySelectorAll(".justify-content");
    const alignItemsButtons = document.querySelectorAll(".align-items");
    const flexGrowButtons = document.querySelectorAll(".flex-grow");
    const boxInputs = [
        document.getElementById("box-1"),
        document.getElementById("box-2"),
        document.getElementById("box-3")
    ];
    const resetFlexboxButton = document.getElementById("reset-flexbox");

    gapInput.addEventListener("input", () => {
        flexContainer.style.gap = gapInput.value + "px";
    });

    flexDirections.forEach(button => {
        button.addEventListener("click", () => {
            flexContainer.style.flexDirection = button.textContent.toLowerCase();
        });
    });

    justifyContentButtons.forEach(button => {
        button.addEventListener("click", () => {
            let value = button.textContent.toLowerCase().replace(' ', '-');
            flexContainer.style.justifyContent = value;
        });
    });

    alignItemsButtons.forEach(button => {
        button.addEventListener("click", () => {
            let value = button.textContent.toLowerCase();
            if (value === 'start') value = 'flex-start';
            if (value === 'end') value = 'flex-end';
            flexContainer.style.alignItems = value;
        });
    });

    flexGrowButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.id === "reset") {
                resetFlexGrow();
            } else if (button.id === "grow-all") {
                setFlexGrowAll();
            }
        });
    });

    boxInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            setFlexGrow(index, input.value);
        });
    });

    resetFlexboxButton.addEventListener("click", () => {
        resetFlexbox();
    });

    function resetFlexGrow() {
        boxInputs.forEach(input => input.value = "0");
        document.querySelectorAll(".flex-item").forEach(item => item.style.flexGrow = "0");
    }

    function setFlexGrowAll() {
        boxInputs.forEach(input => input.value = "1");
        document.querySelectorAll(".flex-item").forEach(item => item.style.flexGrow = "1");
    }

    function setFlexGrow(index, value) {
        document.querySelectorAll(".flex-item")[index].style.flexGrow = value;
    }

    function resetFlexbox() {
        gapInput.value = "0";
        flexContainer.style.gap = "0px";
        flexContainer.style.flexDirection = "row";
        flexContainer.style.justifyContent = "flex-start";
        flexContainer.style.alignItems = "flex-start";
        resetFlexGrow();
    }
});