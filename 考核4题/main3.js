window.onload = function () {
    var img = document.getElementById("img");
    var show= document.getElementById("show");
    var hidden = document.getElementById("hidden");
    show.onclick = function () {
        img.style.display = "block";
    }
    hidden.onclick = function () {
        img.style.display = "none";
    }
} 