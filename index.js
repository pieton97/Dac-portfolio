console.log('helllloooo');

//this is for the tabs to open my projects
function openCity(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

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
  colorThemeBtn.innerHTML = "Light Mode";
} else if (localTheme == "Dark") {
  document.body.classList.add("dark-theme");
  colorThemeBtn.innerHTML = "Dark Mode";
}

colorThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle("dark-theme");
  
  if (colorThemeBtn.innerHTML === "Dark Mode") {
    colorThemeBtn.innerHTML = "Light Mode";
    localStorage.setItem("theme", "Light");
  } else {
    colorThemeBtn.innerHTML = "Dark Mode";
    localStorage.setItem("theme", "Dark");
  }
});
