module.exports = function () {
    var menuContainer = document.getElementById("menu-container"),
        openBtn = document.getElementById('menu-btn'),
        menu = menuContainer.getElementsByClassName('menu')[0],
        menuLinks = menuContainer.getElementsByClassName('menu-links')[0],
        closeBtn = menuContainer.getElementsByClassName('close-btn')[0];

    function openMenu() {
        menu.style.display = "block";
    }

    function closeMenu() {
        menu.style.display = "none";
    }

    return {
        init: function () {
            console.log(openBtn);
            openBtn.addEventListener("click", openMenu, false); 
            closeBtn.addEventListener('click', closeMenu);
        }
    };
}