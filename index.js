document.addEventListener(DOMContentLoaded, () => {
    const toggleMenu = () =>{
        const menu = document.getElementById('navMenu');
        if(menu)menu.classList.toggle('active'); 
    }
    window.toggleMenu = toggleMenu;
});
 const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if(!section) return;
        const headerHeight = 70; // Altura fixa do cabeçalho
        const sectionPosition = section.offsetTop - headerHeight;
        window.scrollTo({top: sectionPosition, behavior: 'smooth'});

        const menu = document.getElementById('navMenu');
        if(menu) menu.classList.remove('active'); // Fecha o menu após clicar em um link
    }

