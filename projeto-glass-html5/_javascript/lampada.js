const btn2 = document.getElementById("btn2");

btn2.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
    
})