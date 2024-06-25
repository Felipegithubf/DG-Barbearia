document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-menu a');
  
    navItems.forEach(item => {
      // Adiciona o evento de passar o mouse
      item.addEventListener('mouseenter', () => {
        // Aplica o efeito de zoom
        gsap.to(item, { scale: 1.2, duration: 0.3 });
  
        // Mostra a aba adicional (você pode personalizar esta parte)
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');
     
   
        dropdown.style.top = `${item.getBoundingClientRect().bottom}px`;
        dropdown.style.left = `${item.getBoundingClientRect().left}px`;
        dropdown.style.backgroundColor = '#fff';
        dropdown.style.border = '1px solid #ccc';
        dropdown.style.padding = '10px';
        dropdown.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  
        document.body.appendChild(dropdown);
  
        // Remove a aba adicional quando o mouse sair do item
        item.addEventListener('mouseleave', () => {
          gsap.to(item, { scale: 1, duration: 0.3 });
          dropdown.remove();
        });
      });
    });
  });