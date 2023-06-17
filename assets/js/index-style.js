function hamburgerFunc() {
    var sidebar = document.getElementById("dropdown-menu");
    var sidebarStyle = getComputedStyle(sidebar);

    if(sidebarStyle.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }

    return false;
}