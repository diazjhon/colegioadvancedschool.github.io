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




/*Sección de Inicial-Matricula */


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
    fotosBtn.addEventListener('click', showFotos);
    videosBtn.addEventListener('click', showVideos);
    puzzleBtn.addEventListener('click', showPuzzle);

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


/*Sección de Inicial-programas*/
document.addEventListener('DOMContentLoaded', () => {
    // Asegúrate de que el DOM esté completamente cargado antes de ejecutar el código
    document.querySelectorAll('.nivel').forEach(nivel => {
        nivel.addEventListener('click', () => {
            const level = nivel.getAttribute('data-level');
            let title, description, imageSrc, videoSrc;

            switch (level) {
                case 'inicial':
                    title = 'Nivel Inicial';
                    description = 'En el Nivel Inicial de Advanced School Peru, cada día es una nueva aventura donde la imaginación no tiene límites. Aquí, cada sonrisa, cada pregunta curiosa y cada descubrimiento forman parte del primer paso hacia un viaje educativo lleno de magia y aprendizaje. Creamos un ambiente seguro y lleno de amor, donde los más pequeños exploran el mundo a través del juego, las historias y las experiencias sensoriales. Nuestro compromiso es sembrar la semilla de la curiosidad, fomentando la confianza y despertando en ellos el deseo innato de conocer, explorar y soñar. Educación inicial para los más pequeños. Aquí se fomenta el desarrollo emocional y social de los niños.';
                    imageSrc = 'imagenes/inicial4.jpg'; // Cambia a la ruta de tu imagen
                    videoSrc = ''; // Sin video
                    break;
                case 'primaria':
                    title = 'Primaria';
                    description = 'La Primaria en Advanced School Peru es un vibrante escenario donde el aprendizaje cobra vida y la creatividad florece. Con un enfoque dinámico y participativo, guiamos a nuestros estudiantes para que fortalezcan sus habilidades lógicas, comunicativas y artísticas. Aquí, cada clase es una invitación a cuestionar, resolver problemas y pensar más allá de lo evidente. Promovemos el espíritu crítico y la innovación, mientras construimos valores como el respeto, la empatía y el trabajo en equipo. Nuestro objetivo es formar estudiantes seguros, curiosos y preparados para afrontar cada desafío con entusiasmo y creatividad. Formación integral para niños de primaria. Se desarrollan habilidades académicas y sociales.';
                    imageSrc = 'imagenes/primaria2.jpg'; // Cambia a la ruta de tu imagen
                    videoSrc = ''; // Sin video
                    break;
                case 'secundaria':
                    title = 'Secundaria';
                    description = 'El nivel Secundario en Advanced School Peru es mucho más que una etapa académica: es un tiempo de crecimiento, descubrimiento y preparación para el futuro. Nos enfocamos en brindar una formación integral que combina la excelencia académica, el dominio tecnológico y la fortaleza emocional. Aquí, nuestros estudiantes desarrollan habilidades de pensamiento crítico, liderazgo y colaboración, mientras exploran sus pasiones y talentos. Los acompañamos en cada paso, guiándolos a convertirse en jóvenes seguros de sí mismos, listos para dejar huella en el mundo, afrontar retos y alcanzar sus sueños con determinación y perseverancia. Preparación para el futuro de los jóvenes. Se enfoca en el desarrollo académico y personal.';
                    imageSrc = 'imagenes/secundaria2.jpg'; // Cambia a la ruta de tu imagen
                    videoSrc = ''; // Sin video
                    break;
                case 'tiktok':
                    title = 'TikTok';
                    description = '¡Bienvenidos a la energía y creatividad de Advanced School Peru en TikTok! Nuestra comunidad virtual es un reflejo del entusiasmo y la alegría que vivimos cada día. A través de videos dinámicos, desafíos entretenidos y contenido educativo, mostramos el corazón vibrante de nuestro colegio. Únete a nosotros para celebrar los logros de nuestros estudiantes, compartir momentos especiales y descubrir cómo el aprendizaje y la diversión van de la mano. ¡Síguenos y forma parte de esta gran familia donde la educación se vive con pasión y originalidad! Disfruta de nuestro contenido en TikTok.';
                    imageSrc = ''; // Sin imagen
                    videoSrc = 'https://www.tiktok.com/embed/7260239547882130694'; // URL del video de TikTok
                    break;
                default:
                    title = 'Selecciona un nivel';
                    description = 'Por favor, selecciona un nivel para ver más detalles.';
                    imageSrc = ''; // Sin imagen
                    videoSrc = ''; // Sin video
                    break;
            }

            // Actualiza el contenido del área de detalles
            const detalleTitulo = document.getElementById('detalle-titulo');
            const detalleDescripcion = document.getElementById('detalle-descripcion');
            const detalleImagen = document.getElementById('detalle-imagen');
            const detalleVideo = document.getElementById('detalle-video-tiktok');

            if (detalleTitulo && detalleDescripcion && detalleImagen && detalleVideo) {
                detalleTitulo.textContent = title;
                detalleDescripcion.textContent = description;

                if (videoSrc) {
                    detalleVideo.style.display = 'block';
                    detalleVideo.querySelector('iframe').src = videoSrc;
                    detalleImagen.style.display = 'none';
                } else {
                    detalleVideo.style.display = 'none';
                    detalleImagen.src = imageSrc;
                    detalleImagen.style.display = 'block';
                }
            } else {
                console.error('Uno o más elementos no se encontraron en el DOM.');
            }

            // Detectar si es modo celular (ancho de pantalla menor a 768px)
            const isMobile = window.innerWidth < 768;

            // Desplazar suavemente hacia la sección correspondiente
            if (isMobile) {
                const programaDetalle = document.getElementById('programa-detalle');
                if (programaDetalle) {
                    programaDetalle.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    console.error('El elemento con ID "programa-detalle" no se encontró en el DOM.');
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
    const desplazamiento = document.getElementById('desplazamiento');
    if (desplazamiento) {
        desplazamiento.style.scrollMarginTop = '0px'; // Restablecer el margen de desplazamiento
        desplazamiento.style.scrollBehavior = 'auto'; // Desactivar el desplazamiento suave temporalmente
        setTimeout(() => {
            desplazamiento.style.scrollBehavior = 'smooth'; // Reactivar el desplazamiento suave
        }, 100);
    }
});
