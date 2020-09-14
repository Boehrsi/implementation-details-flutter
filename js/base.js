function toggleScrollingOnMobileNavigation() {
    var checkBox = document.getElementById("toggle-nav");
    var main = document.getElementsByTagName("main");
    var footer = document.getElementById("footer");
    if (checkBox.checked == true) {
        main[0].setAttribute("style", "display: none");
        footer.setAttribute("style", "display: none");
    } else {
        main[0].setAttribute("style", "display: flex");
        footer.setAttribute("style", "display: block");
    }
} 