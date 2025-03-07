// Menu cerrar y abrir menu
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const programasLink = document.querySelector('.dropdown > a');

    if (mobileMenu && navMenu && programasLink) {
        // Abrir/cerrar el menú al hacer clic en el botón de hamburguesa
        mobileMenu.addEventListener('click', function(event) {
            event.stopPropagation();
            navMenu.classList.toggle('active');
        });

        // Cerrar el menú al hacer clic en cualquier enlace dentro del menú (excepto "Programas")
        navMenu.querySelectorAll('a:not(.dropdown > a)').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });

        // Mostrar/ocultar el submenú al hacer clic en "Programas"
        programasLink.addEventListener('click', function(event) {
            event.stopPropagation();
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('active');
            }
        });

        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });

        // Evitar que el menú se cierre al hacer clic dentro de él
        navMenu.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    } else {
        console.error('No se encontraron los elementos del menú.');
    }
});

// Modo oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Botón de volver al inicio
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/*Sección de Video */
document.getElementById('play-button').addEventListener('click', function() {
    const video = document.getElementById('video-tiktok');
    const thumbnail = document.getElementById('video-thumbnail');
    video.style.display = 'block'; // Mostrar el video
    thumbnail.style.display = 'none'; // Ocultar la imagen
    video.play(); // Reproducir el video
    this.style.display = 'none'; // Ocultar el botón
});




document.addEventListener('DOMContentLoaded', function () {
    const fotosBtn = document.getElementById('fotos');
    const videosBtn = document.getElementById('videos');
    const puzzleBtn = document.getElementById('puzzle');
    const dynamicTitle = document.getElementById('dynamic-title');
    const dynamicText = document.getElementById('dynamic-text');
    const dynamicContent = document.getElementById('dynamic-content');

    // Mostrar contenido de videos al cargar la página
    showVideos();

    // Eventos para los botones
    fotosBtn.addEventListener('click', function() {
        showFotos();
        document.getElementById('fotos-section').scrollIntoView({ behavior: 'smooth' });
    });
    videosBtn.addEventListener('click', function() {
        showVideos();
        document.getElementById('videos-section').scrollIntoView({ behavior: 'smooth' });
    });
    puzzleBtn.addEventListener('click', function() {
        showPuzzle();
        document.getElementById('puzzle-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Funciones para cambiar el contenido
    function showFotos() {
        dynamicTitle.textContent = "Galería de Recuerdos";
        dynamicText.textContent = "Cada fotografía es más que una simple imagen; es un reflejo de sonrisas genuinas, logros alcanzados y momentos únicos que marcan el viaje educativo de nuestros estudiantes. En cada captura, vemos crecer sueños, forjar amistades y fortalecer valores. ¡Descubre la esencia de Advanced School Peru a través de cada recuerdo inmortalizado!";
        dynamicContent.innerHTML = `
            <img src="imagenes/inicial5.jpg" alt="Foto 1">
            <img src="imagenes/inicial2.jpg" alt="Foto 2">
        `;
    }

    function showVideos() {
        dynamicTitle.textContent = "Explora con Nosotros";
        dynamicText.textContent = "Nuestros videos cuentan historias vibrantes de aprendizaje, creatividad y esfuerzo. Desde las primeras palabras en Inicial hasta los grandes proyectos en Secundaria, cada experiencia capturada refleja el espíritu innovador y el compromiso de nuestra comunidad educativa. Sumérgete en nuestras vivencias y siente la magia de ser parte de Advanced School Peru.";
        dynamicContent.innerHTML = `
            <video controls>
                <source src="videos/inicial5.mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
            <video controls>
                <source src="videos/inicial7.mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `;
    }

    function showPuzzle() {
        dynamicTitle.textContent = "Desafíos Interactivos";
        dynamicText.textContent = "El juego es la puerta al conocimiento. A través de nuestros desafíos interactivos, como el juego de puzzles, fomentamos el pensamiento lógico, la concentración y la creatividad de nuestros estudiantes. Porque aprender también es explorar, resolver y soñar. ¡Cada desafío superado es un paso más hacia un futuro brillante!";
        dynamicContent.innerHTML = `
            <div id="puzzle-game"></div>
        `;
        initializePuzzle();
    }


    // Lógica del juego de puzzle
    function initializePuzzle() {
        const images = [
            'imagenes/inicial1.jpg', 'imagenes/inicial1.jpg',
            'imagenes/inicial2.jpg', 'imagenes/inicial2.jpg',
            'imagenes/primaria2.jpg', 'imagenes/primaria2.jpg',
            'imagenes/primaria1.jpg', 'imagenes/primaria1.jpg'
        ];
        images.sort(() => Math.random() - 0.5); // Barajar las imágenes

        const puzzleGame = document.getElementById('puzzle-game');
        puzzleGame.innerHTML = '';

        let flippedCards = [];
        let matchedCards = [];

        images.forEach((image, index) => {
            const card = document.createElement('div');
            card.classList.add('puzzle-card');
            card.dataset.index = index;

            const cardInner = document.createElement('div');
            cardInner.classList.add('puzzle-card-inner');

            const cardFront = document.createElement('div');
            cardFront.classList.add('puzzle-card-front');
            cardFront.textContent = "?";

            const cardBack = document.createElement('div');
            cardBack.classList.add('puzzle-card-back');
            cardBack.style.backgroundImage = `url(${image})`;

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);
            puzzleGame.appendChild(card);

            card.addEventListener('click', () => flipCard(card));
        });

        function flipCard(card) {
            if (flippedCards.length < 2 && !flippedCards.includes(card)) {
                card.classList.add('flipped');
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    checkMatch();
                }
            }
        }

        function checkMatch() {
            const [card1, card2] = flippedCards;
            const image1 = card1.querySelector('.puzzle-card-back').style.backgroundImage;
            const image2 = card2.querySelector('.puzzle-card-back').style.backgroundImage;

            if (image1 === image2) {
                matchedCards.push(card1, card2);
                if (matchedCards.length === images.length) {
                    alert("¡Felicidades! Has ganado el juego.");
                }
            } else {
                setTimeout(() => {
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                }, 1000);
            }
            flippedCards = [];
        }
    }
});


/*Sección de Inicial-mision vision */

document.addEventListener('DOMContentLoaded', function () {
    // Array de imágenes para el carrusel
    const imagenes = [
        'imagenes/inicial1.jpg',
        'imagenes/inicial2.jpg',
        'imagenes/inicial3.jpg',
        'imagenes/inicial4.jpg'
    ];

    let indiceActual = 0;
    const imagenCarrusel = document.getElementById('carrusel-imagen');

    // Función para cambiar la imagen cada 3 segundos
    function cambiarImagen() {
        indiceActual = (indiceActual + 1) % imagenes.length; // Avanza al siguiente índice
        imagenCarrusel.src = imagenes[indiceActual]; // Cambia la imagen
    }

    // Iniciar el carrusel
    setInterval(cambiarImagen, 3000); // Cambia la imagen cada 3 segundos
});


/*Sección de Instalaciones*/
const instalaciones = {
    futbol: {
        titulo: "Cancha de Fútbol",
        descripcion: "Un amplio espacio donde los estudiantes aprenden mucho más que a patear un balón. Aquí, fortalecen valores como el trabajo en equipo, la perseverancia y el liderazgo, mientras disfrutan de uno de los deportes más apasionantes. Cada partido es una lección de estrategia, compañerismo y sana competencia.",
        imagenes: [
            "imagenes/futbol1.jpg",
            "imagenes/futbol2.jpg",
            "imagenes/futbol3.jpg",
            "imagenes/futbol4.jpg"
        ]
    },
    voley: {
        titulo: "Campo de Vóley",
        descripcion: "Un lugar diseñado para cultivar la coordinación, la agilidad y la comunicación. El vóley no solo desarrolla habilidades físicas, sino que también enseña a nuestros estudiantes la importancia de la colaboración y la confianza mutua, haciendo que cada punto ganado sea el resultado del esfuerzo conjunto.",
        imagenes: [
            "imagenes/voley1.jpg",
            "imagenes/voley2.jpg",
            "imagenes/voley3.jpg",
            "imagenes/voley4.jpg"
        ]
    },
    piscina: {
        titulo: "Piscina",
        descripcion: "Un entorno perfecto para que los niños y jóvenes exploren el mundo acuático con seguridad. A través de nuestras clases de natación, promovemos el desarrollo motor, la disciplina y la autoconfianza, mientras los estudiantes disfrutan de una actividad que combina diversión y aprendizaje.",
        imagenes: [
            "imagenes/piscina1.jpg",
            "imagenes/piscina2.jpg",
            "imagenes/piscina3.jpg",
            "imagenes/piscina4.jpg"
        ]
    },
    juegos: {
        titulo: "Área de Juegos para Niños",
        descripcion: "Un rincón lleno de color y magia, diseñado especialmente para los más pequeños. Este espacio estimula su imaginación, fomenta la socialización y les permite explorar libremente, promoviendo habilidades esenciales como la creatividad, la curiosidad y la resolución de problemas a través del juego.",
        imagenes: [
            "imagenes/juegos1.jpg",
            "imagenes/juegos2.jpg",
            "imagenes/juegos3.jpg",
            "imagenes/juegos4.jpg"
        ]
    }
};

let currentImageIndex = 0;
let intervalId = null;

function mostrarDetalleInstalacion(instalacion) {
    const detalleTitulo = document.getElementById('detalle-titulo');
    const detalleDescripcion = document.getElementById('detalle-descripcion');
    const detalleImagen = document.getElementById('detalle-imagen');

    detalleTitulo.textContent = instalacion.titulo;
    detalleDescripcion.textContent = instalacion.descripcion;
    detalleImagen.src = instalacion.imagenes[0];
    detalleImagen.style.display = 'block';

    currentImageIndex = 0;
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % instalacion.imagenes.length;
        detalleImagen.src = instalacion.imagenes[currentImageIndex];
    }, 3000);
}

// Seleccionar la Cancha de Fútbol por defecto al cargar la página
window.onload = () => {
    mostrarDetalleInstalacion(instalaciones.futbol);
};

// Manejar clics en los niveles
document.querySelectorAll('.nivel').forEach(nivel => {
    nivel.addEventListener('click', () => {
        const level = nivel.getAttribute('data-level');
        mostrarDetalleInstalacion(instalaciones[level]);

        // Detectar si es modo celular (ancho de pantalla menor a 768px)
        const isMobile = window.innerWidth < 768;

        // Desplazar suavemente hacia la sección correspondiente
        if (isMobile) {
            const instalacionDetalle = document.getElementById('instalacion-detalle');
            if (instalacionDetalle) {
                instalacionDetalle.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                console.error('El elemento con ID "instalacion-detalle" no se encontró en el DOM.');
            }
        } else {
            const desplazamiento = document.getElementById('desplazamiento');
            if (desplazamiento) {
                desplazamiento.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                console.error('El elemento con ID "desplazamiento" no se encontró en el DOM.');
            }
        }
    });
});

// Evitar el desplazamiento automático al cargar la página
window.addEventListener('load', () => {
    const desplazamiento = document.getElementById('desplazamiento');
    if (desplazamiento) {
        desplazamiento.style.scrollMarginTop = '0px'; // Restablecer el margen de desplazamiento
        desplazamiento.style.scrollBehavior = 'auto'; // Desactivar el desplazamiento suave temporalmente
        setTimeout(() => {
            desplazamiento.style.scrollBehavior = 'smooth'; // Reactivar el desplazamiento suave
        }, 100);
    }
});