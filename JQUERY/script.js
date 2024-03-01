$(document).ready(function() {
    let imagenes = [
        {
            "url": "img/img1.webp",
            "nombre": "Manipulación del DOM",
            "descripcion": "El código proporciona una interfaz interactiva que muestra cómo manipular el DOM en JavaScript, realizando acciones como la búsqueda de elementos, el acceso a padres e hijos, la creación de nuevos elementos y la eliminación de elementos existentes.",
            "dataUrl": "../DOM/dom.html"
        },
        {
            "url": "img/img2.webp",
            "nombre": "Manipulación del BOM",
            "descripcion": "El código proporcionado de muestra cómo utilizar el BOM en JavaScript para interactuar con ventanas emergentes del navegador, controlar el título de la ventana, manejar alertas y temporizadores, así como para agregar interactividad a través de eventos del usuario.",
            "dataUrl": "../BOM/index.html"
        },
        {
            "url": "img/img5.webp",
            "nombre": "Validación",
            "descripcion": "Este código JavaScript valida los datos ingresados en el formulario y proporciona retroalimentación al usuario sobre si la validación fue exitosa o si se encontraron errores.",
            "dataUrl": "../VALIDACION/index.html"
        },
        {
            "url": "img/eventos.png",
            "nombre": "Eventos",
            "descripcion": "En los puntos anteriormente vistos se hace uso de addEventListener.",
            "dataUrl": "index.html"
        }
        ,
        {
            "url": "img/jquery.JPG",
            "nombre": "Jquery",
            "descripcion": "jQuery se utiliza para aplicar un efecto de desvanecimiento al cuerpo de la página actual antes de redireccionar a una nueva página cuando se hace clic en las imágenes del carrusel.",
            "dataUrl": "index.html"
        },
        {
            "url": "img/ajaxcoll.png",
            "nombre": "Ajax",
            "descripcion": "Este codigo tiene una implementación para practicar la integración de AJAX con JavaScript y PHP utilizando JSON como formato de comunicación.",
            "dataUrl": "../AJAX/index.html"
        }
        ,
        {
            "url": "img/Api.JPG",
            "nombre": "API",
            "descripcion": "Este código HTML crea una página web que muestra información de un usuario aleatorio obtenido de la API de RandomUser, usando Fetch para consumir la API.",
            "dataUrl": "../API/index.html"
        }
    ];

    let actual = 0;
    let imagen = $('#img');
    let puntos = $('#puntos');
    let texto = $('#texto');

    function actualizarImagenTexto() {
        imagen.html(`<img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`);
        texto.html(`
            <h3>${imagenes[actual].nombre}</h3>
            <p>${imagenes[actual].descripcion}</p>
        `);
    }

    function posicionCarrusel() {
        puntos.html("");
        for (var i = 0; i < imagenes.length; i++){
            if(i == actual){
                puntos.append('<p class="bold">.<p>');
            }
            else{
                puntos.append('<p>.<p>');
            }
        } 
    }

    $('#atras').click(function() {
        actual -= 1;
        if (actual < 0) {
            actual = imagenes.length - 1;
        }
        actualizarImagenTexto();
        posicionCarrusel();
    });

    $('#adelante').click(function() {
        actual += 1;
        if (actual >= imagenes.length) {
            actual = 0;
        }
        actualizarImagenTexto();
        posicionCarrusel();
    });

    //aqui uso la funcion para el desvanecimiento de la pagina antes de seguir a la siguiente pagina efecto..

    $('.imagenes').click(function() {
        let nextPage = imagenes[actual].dataUrl;
        $('body').fadeOut(500, function() {
            window.location.href = nextPage;
        });
    });

    actualizarImagenTexto();
    posicionCarrusel();
});
