console.log('helllloooo console works');

// //this is for the tabs to open my projects
// const openProject = (e, projectName) => {
//   let i, tabcontent, tablinks;
  
//   // hide all tabcontent elements
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
  
//   // hide all active tablinks btns
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
  
//   // show current tab, make tablink btn active
//   document.getElementById(projectName).style.display = "block";
//   e.currentTarget.className += " active";
// }

// // closes project tab and sets button back to inactive
// const closeProject = (e) => {
//   e.parentElement.style.display='none';
//   let activeBtn = document.getElementById("tabBtns").getElementsByClassName("active");
//   activeBtn[0].classList.remove("active");
// }

// //sets default project when page loads
// document.getElementById("defaultProject").click();

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
