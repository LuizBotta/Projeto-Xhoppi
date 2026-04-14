const input = document.getElementById("file-upload");
const fileName = document.getElementById("file-name");

input.addEventListener("change", function () {
    if (this.files.length > 0) {
        fileName.textContent = this.files[0].name;
    } else {
        fileName.textContent = "Nenhum arquivo escolhido";
    }
});

