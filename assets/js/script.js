function hamburgerFunc() {
    var sidebar = document.getElementById("sidebar");
    var sidebarStyle = getComputedStyle(sidebar);

    if (sidebarStyle.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
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
