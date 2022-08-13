const btn2 = document.getElementById("btn2");

btn2.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
    
})

function mudaFoto (foto){
    document.getElementById("icone").src = foto;
}    
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {

  document.body.classList.add('darkmode');

  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {

  document.body.classList.remove('darkmode');

  localStorage.setItem('darkMode', null);
}
 

if (darkMode === 'enabled') {
  enableDarkMode();
}


darkModeToggle.addEventListener('click', () => {

  darkMode = localStorage.getItem('darkMode'); 
  
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  
  } else {  
    disableDarkMode(); 
  }
});