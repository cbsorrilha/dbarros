module.exports = function () {
    var menuContainer = document.getElementById("menu-container"),
        openBtn = menuContainer.getElementById('menu-btn'),
        menu = menuContainer.getElementsByClassName('menu')[0],
        menuLinks = menuContainer.getElementsByClassName('menu-links')[0],
        closeBtn = menuContainer.getElementsByClassName('close-btn')[0];

    function OpenMenu() {
        menu.style.display = "none";
    }

    return {
        init: function () {
            openBtn.addEventListener('click', OpenMenu);
        }
    };
}