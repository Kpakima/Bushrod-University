const menuIconEl = document.querySelector('.menu-icon');
console.log(menuIconEl);
const navListEl = document.querySelector('.nav-list');
console.log(navListEl)


const navOpen = () => {
    navListEl.classList.toggle('show');
}


menuIconEl.addEventListener('click', navOpen)

// aos
AOS.init(
    {
      offset: 200,
      delay: 100,
        duration: 400,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorePlacement: 'top-bottom',
       
    }
)