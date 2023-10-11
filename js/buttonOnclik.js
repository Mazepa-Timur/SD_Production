const hamburgerButton = document.querySelector('.HamburgerMenuButton');
const hamburgerButtonClose = document.querySelector('.HamburgerMenuButtonClose');
const hamburgerMenu =document.querySelector('.HamburgerMenu');
hamburgerMenu.addEventListener("click", ()=> {
    if (hamburgerMenu.className === 'HamburgerMenu hide') {
        hamburgerMenu.className = 'HamburgerMenu show';
        document.body.style.overflow = "hidden";
    } else {
        hamburgerMenu.className = 'HamburgerMenu hide';
        document.body.style.overflow = "visible";
    }
})

const projectButton = document.querySelector('.projectButton');
projectButton.addEventListener("click", ()=> {
    document.querySelector('.projectsFragmentMobile3').className = 'projectsFragmentMobile3';
    document.querySelector('.projectsFragmentMobile4').className = 'projectsFragmentMobile4';
    projectButton.className = 'projectButton hideProject';
})