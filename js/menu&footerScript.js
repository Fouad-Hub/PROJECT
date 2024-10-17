window.onload = function() {
    var m = document.getElementById("menu");
    var f = document.getElementById("footer");

    var xmlhttpMenu = new XMLHttpRequest();
    xmlhttpMenu.open("GET", "menu.html", false);
    xmlhttpMenu.send();
    m.innerHTML = xmlhttpMenu.responseText;

    var xmlhttpFooter = new XMLHttpRequest();
    xmlhttpFooter.open("GET", "footer.html", false);
    xmlhttpFooter.send();
    f.innerHTML = xmlhttpFooter.responseText;
}
