function hamburgerFunc() {
    var sidebar = document.getElementById("sidebar");
    var hamburger = document.getElementById("hamburger-menu-container");
    var sidebarStyle = getComputedStyle(sidebar);

    if (sidebarStyle.display === "none") {
        sidebar.style.display = "block";
        hamburger.style.backgroundColor = "rgb(48, 38, 69)";

    } else {
        sidebar.style.display = "none";
        hamburger.style.backgroundColor = "transparent";
    }

    return false;    
}

function disableHamburgerFunc(x) {
    var sidebar = document.getElementById("sidebar");

    console.log('berhasil');
    console.log(sidebar);

    if (x.matches) {
        sidebar.style.display = "none";
    }
}

var size = window.matchMedia("(min-width: 570px)");
disableHamburgerFunc(size);
size.addEventListener("change", disableHamburgerFunc);
