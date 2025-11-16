document.addEventListener(DOMContentLoaded, () => {
    const toggleMenu = () =>{
        const menu = document.getElementById('navMenu');
        if(menu)menu.classList.toggle('active'); 
    }
    window.toggleMenu = toggleMenu;
});