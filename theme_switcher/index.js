let bgContainerEl = document.getElementById('bgContainer');
let headingEl = document.getElementById('heading');
let themeUserInputEl = document.getElementById('themeUserInput');

let lightThemeImgUrl =
    "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkThemeImgUrl =
    "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

function changeTheme(event) {
    if (event.key === 'Enter') {
        let themeUserInputVal = themeUserInputEl.value;
        if (themeUserInputVal === "light") {
            bgContainerEl.style.backgroundImage = lightThemeImgUrl;
            headingEl.style.color = '#014d40';
        } else if (themeUserInputVal === 'Dark') {
            bgContainerEl.style.backgroundImage = darkThemeImgUrl;
            headingEl.style.color = '#ffffff'
        } else {
            alert('Enter the Valid Theme')
        }
    }
}
themeUserInputEl.addEventListener('keydown', changeTheme)