document.addEventListener("DOMContentLoaded", () => {
    const modoOscuro = localStorage.getItem("modoOscuro");

    if (modoOscuro === "true") {
        document.body.classList.add("dark-mode");
    }

    const switchInput = document.querySelector('.switch input');
    if (switchInput) {
        switchInput.checked = modoOscuro === "true";

        switchInput.addEventListener("change", () => {
            const activo = switchInput.checked;
            document.body.classList.toggle("dark-mode", activo);
            localStorage.setItem("modoOscuro", activo);
        });
    }
});