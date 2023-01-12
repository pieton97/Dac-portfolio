console.log('helllloooo console works');

// header nav menu button on smaller screen
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav-menu')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

// switch between dark mode and light mode button, also saves theme preference 
const colorThemeBtn = document.getElementById('color-theme');

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "Light");
}

let localTheme = localStorage.getItem("theme");

if (localTheme == "Light") {
  document.body.classList.remove("dark-theme");
  colorThemeBtn.innerHTML = "Dark Mode";
} else if (localTheme == "Dark") {
  document.body.classList.add("dark-theme");
  colorThemeBtn.innerHTML = "Light Mode";
}

colorThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle("dark-theme");
  if (colorThemeBtn.innerHTML === "Dark Mode") {
    colorThemeBtn.innerHTML = "Light Mode";
    localStorage.setItem("theme", "Dark");
  } else {
    colorThemeBtn.innerHTML = "Dark Mode";
    localStorage.setItem("theme", "Light");
  }
  console.log('event:', colorThemeBtn.innerHTML, "stored:",localStorage.getItem('theme'));
});
