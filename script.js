document.addEventListener("DOMContentLoaded",() => {
    //alert("Your browser has loaded correctly")
    const title = document.getElementById('title');

    //const parrafo = document.getElementById('parrafo');'parrafo');
    });
console.log('Welcome');

function boton() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
var isRed = false;

        function toggleColor() {
            var button = document.getElementById("magicButton");
            
            if (isRed) {
                button.classList.remove("btn-danger");
                button.classList.add("btn-primary");
            } else {
                button.classList.remove("btn-primary");
                button.classList.add("btn-danger");
            }
            
            isRed = !isRed;
        }