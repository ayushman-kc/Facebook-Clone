const settingsMenu = document.querySelector(".settings-menu");
const toggleSettingsMenu = () => {
    settingsMenu.classList.toggle("settings-menu-height");
}

const darkButton = document.getElementById("dark-btn");
darkButton.onclick = () => {
    darkButton.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}
