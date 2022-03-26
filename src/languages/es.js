export default {
    home: {
        title: "Hola ! Soy ",
        name: "Roberto Baca",
        btn1: "Acerca de mi",
        btn2: "Contacto",
    },

    menu: {
        home: "Inicio" ,
        about: "Acerca de mi",
        projects: "Proyectos Web",
        games: "Videojuegos",
        contact: "Contacto"
    },

    footer: {
        copyBy: "por",
        copy: "Todos los derechos reservados."
    },

    about: {
        title: "Acerca de mi",
        paragraph1a: "Hola! Mi nombre es ",
        paragraph1b: ", me apasionan ",
        paragraph1c: "el desarrollo web",
        paragraph1d: " y",
        paragraph1e: "el diseño y programación de videojuegos",
        paragraph2: "Soy un amante de la tecnología. Y me encantan las computadoras !",
        paragraph3: "Me gusta programar y aprender nuevas prácticas y métodos. Cuando no estoy programando, estoy soñando con programar! Es muy fácil quedarte en tu zona de confort cuando tenes ciertas habilidades que has ido perfeccionando a lo largo del tiempo, pero para mi, no hay nada que se compare con la sensación de aprender algo nuevo.",
        paragraph4: "Realmente me emociono cuando se lanza una nueva tecnología o cuando está disponible una nueva aplicación web que hace algo nunca que antes se había hecho. Me impresiona cuando veo un código inteligente y simple que hace algo que se que es difícil de lograr.",
        paragraph5: "En mi tiempo libre, diseño y programo videojuegos ! Me gusta probar diferentes motores, probar nuevas ideas o mecánicas.",
        paragraph6: "Este sitio web es mi portfolio personal que cree mientras aprendía Desarrollo Web",
        paragraph7: "He estado trabajando en distintos proyectos personales que podes consultar aqui mismo.",
        paragraph8: "Gracias por la visita!",
        cv: "Mi CV",
    },

    contact: {
        title: "Contacto",
        subtitle: "Dejame un mensaje",
        send: "Enviar",
        placeholderName: "Nombre",
        placeholderMail: "Email",
        placeholderMsg: "Mensaje",
    },

    projects: {
        title: "Proyectos Web",
        gameOver: {
           mainDescription: "Es un E-commerce codeado con MERN (MongoDB, React, Express and Node)", 
           description1: "Características:",   
           description2: "* Frontend: Usé React y Redux para manejar los distintos estados. La app fue deployada con Firebase.",
           description3: "* Backend: Usé Express y NodeJS. Usé MongoDB como base de datos (NoSQL) y mongoose para conectarme. La base de datos la subí a Heroku.",
           description4: "* Solo los usuarios registrados pueden comprar en la tienda.",
           description5: "* Validación de registros con Express Validator.",
           description6: "* Autenticación con JSON Web Token.",
           description7: "* Encriptado de contraseñas con bcryptjs.",
           description8: "* CRUD (Create, Read, Update and Delete)"
        },

        freshMarket: {
            mainDescription: "Se trata de una tiena online que se dedica a la venta de productos orgánicos como vegetales y frutas. Es un simple sitio de e-commerce codeado con JavaScript Vanilla.",
            description1: "El usuario puede agregar o eliminar productos de su carrito de compras, actualizar el carrito, cambiar la cantidad de cada producto, y vaciar el carrito de compras.",   
            description2: "Una vez que la compra está definida, el ususario puede proceder al pago. Para ello, deberán estar registrado en el sitio y loguearse usando su usuario y contraseña.",
            description3: "El carrito de compras queda guargado en el Local Storage asociado a cada usuario.",
        },

        toDo: {
            mainDescription: "Simple lista de tareas codeada en JavaScript Vanilla.",
            description1: "Esta app permite al usuario agregar nuevas tareas, marcar tareas como completadas o eliminarlas. Utiliza el local storage para guardar la lista de tareas del usuario.",
            description2: "Además, un mensaje en pantalla nos indica la cantidad de tareas pendientes.",
            description3: "Otra funcionalidad es un filtro que permite seleccionar las tareas completadas o las pendientes.",        
        }
    },

    games: {
        title: "Videojuegos",

        runningKid: {
           mainDescription: "Running Kid es un endless runner 3D donde podes saltar, deslizarte e incluso romper cajas de madera!", 
           description1: "Se trata de mi primer juego desarrollado en Unity. Se trata de un unico, simple y corto nivel.",   
           description2: "Cada vez que jugas, el nivel es ligeramente diferente. Está generado en forma procedural. Si lo explicamos en palabras simples, procedural significa que los obstaculos del nivel son generados por cierta logica o algoritmo, en lugar de ser creados por un ser humano en forma manual.",  
        },

        eBot: {
            mainDescription: "e-bot es un prototipo codeado en Typescript y con el motor Cocos Creator 2.4.4", 
            description1: "Se trata de un juego 2D puzzle-platformero. La idea es llevar al menos un robot a la puerta de salida de cada nivel. Se controla un solo robot a la vez, que puede auto destruirse o desactivarse para hacer lugar a los nuevos robots.",               
         },

        zackOdyssey: {
            mainDescription: "Obtené diamantes, super monedas de oro, derrotá enemigos y evitá peligros en esta aventura plataformera!", 
            description1: "Se trata de un pequeño juego que desarrollé en Construct2 para apender a implementar nuevas mecánicas de juego. Solo 10 pequeños niveles.",               
        }
    }

}