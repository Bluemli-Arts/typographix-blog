// #region get current year
const yearSpan = document.getElementById("copy-year");
yearSpan.textContent = new Date().getFullYear();
// #endregion get current year

// #region navbar h1 

function checkScroll() {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('logo');

  let scrolPosition = window.scrollY; //pixel value

  if (scrolPosition > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let newSize = 3 - (scrolPosition * 0.01);

  newSize = Math.max(1.5, newSize); //takes bigger number
  newSize = Math.min(3, newSize); //takes smaller number
  logo.style.fontSize = newSize + "rem";


}

window.addEventListener('scroll', checkScroll);

// #endregion navbar h1 