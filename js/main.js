

const container = document.getElementById('container-icones');

// Sélectionner tous les carrés
const carres = container.querySelectorAll('.carre');


document.querySelectorAll('.carre').forEach(carres => {
    carres.addEventListener('click', function() {
        const couleur = window.getComputedStyle(this).backgroundColor;
        // Vérifie si le carré est déjà modifié
        if (this.classList.contains('active')) {
            // Rétablir les propriétés initiales
            this.style.borderRadius = '0';
            this.style.boxShadow = 'none';
            this.querySelector('.texte').style.display = 'none';
            document.getElementById('container-gris').style.backgroundColor = 'rgba(182, 188, 190, 0.548)'; // retrouve la couleur grise
            this.classList.remove('active'); // le carré repasse en mode passif, on lui enlève la classe 'active'
        } else {
            // Appliquer les nouvelles propriétés
            this.style.borderRadius = '15px';
            this.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';
            this.querySelector('.texte').style.display = 'block';
            document.getElementById('container-gris').style.backgroundColor = couleur; // on applique la couleur du carré qui est cliqué
            this.classList.add('active'); // le carré passe en mode actif -> on lui ajoute la classe 'active'
        }
    });
});


