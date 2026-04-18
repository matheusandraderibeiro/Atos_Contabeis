export function mostraMenu() {
    const checkBox = document.getElementById("checkbox");   
    const mobileMenu = document.querySelector(".mobileMenu");

    checkBox.addEventListener("click", () => {
       if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
        } else {
            mobileMenu.classList.add('open');
        }
    })
}