document.addEventListener('DOMContentLoaded', (event) => {
    const div_space_etiquette_entete = document.getElementById('space-etiquette-entete');
    const div_carousel = document.getElementById('carousel');
    const div_space_etiquette_developpement = document.getElementById('space-etiquette-developpement');
    const pagination = document.getElementById('pagination');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    div_space_etiquette_entete.innerHTML = "";
    div_carousel.innerHTML = "";

    const items = []; // Ajoutez vos éléments ici
    
    for (let [key, etiquette] of all_etiquette.entries()) {
        if (etiquette.head === true) { div_space_etiquette_entete.innerHTML = etiquette.constr_etiquette(); }
        else { 
            items.push(`<div class="carousel-item">` + etiquette.constr_etiquette() + `</div>`); 
            div_space_etiquette_developpement.innerHTML += etiquette.constr_etiquette_developpement();
        }
    }
    
    const itemsPerPage = 4;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    let currentPage = 1;

    // Fonction pour afficher les éléments de la page actuelle
    function updateCarousel() {
        // Affiche les éléments de la page actuelle
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        div_carousel.innerHTML = items.slice(start, end).join('');
        
        // Gestion des ouvertures des modals
        const etiquettes = div_carousel.children;
        const developpements = document.getElementsByClassName('developpement-etiquette');
        let etiquette, idEtiquette;
        let developpement;
        for (let i = 0; i < etiquettes.length; i++) {
            etiquette = etiquettes[i];
            etiquette.addEventListener('click', function(e) {
                idEtiquette = etiquettes[i].children[0].id;
                developpement = document.getElementById("developpement-" + idEtiquette);
                if (developpement.style.display === 'flex') {
                    developpement.style.display = 'none';
                } else {
                    // Masquer tous les developpements d'info
                    for (let j = 0; j < developpements.length; j++) { 
                        developpements[j].style.display = 'none';
                    }
                    developpement.style.display = 'flex';
                } 
            });
        }


        // Met à jour l'état des flèches
        prevBtn.classList.toggle('disabled', currentPage === 1);
        nextBtn.classList.toggle('disabled', currentPage === totalPages);

        // Met à jour les points de pagination
        pagination.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const dot = document.createElement('span');
            dot.className = `dot ${i === currentPage ? 'active' : ''}`;
            dot.addEventListener('click', () => goToPage(i));
            pagination.appendChild(dot);
        }
    }
  
    
    // Gestion des flèches
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateCarousel();
        }
    });
  
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateCarousel();
        }
    });
  
    // Fonction pour naviguer vers une page spécifique
    function goToPage(page) {
        currentPage = page;
        updateCarousel();
    }
  
    // Initialisation
    updateCarousel();

});