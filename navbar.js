document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-button');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className += " active";
        }
    }
});