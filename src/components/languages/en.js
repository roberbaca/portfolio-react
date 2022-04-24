export default {
    home: {
        title: "Hi ! I am " ,       
        btn1: "About",
        btn2: "Contact"
    },

    menu: {
        home: "Home" ,
        about: "About",
        projects: "Web Projects",
        games: "Videogames",
        contact: "Contact"
    },

    footer: {
        copyBy: "by",
        copy: "All Rights Reserved."
    },

    about: {
        title: "About me",
        paragraph1a: "Hi! My name is ",
        paragraph1b: ", I´m really passionate about ",
        paragraph1c: "web development",
        paragraph1d: " and",
        paragraph1e: "videogames development",
        paragraph2: "I ´m a geek. I love computers and everything about them !",
        paragraph3: "I love coding and learning new coding practices and methods. When I ´m not programming, I`m thinking about programming ! It’s very easy to become complacent when you have a certain set of skills that you refine over years but for me, there is nothing that compares to the feeling when you learn a new skill.",
        paragraph4: "I truly get excited when a technology is released or when a new web application that does something never done before becomes available. I ´m deeply impressed when I see smart and beautiful code that does something I know is hard to accomplish.",
        paragraph5: "In my spare time, I make videogames ! I play around with different engines, trying out new ideas or game mechanics.",
        paragraph6: "As you can see, this website is my personal portfolio webpage, which I created while learning Web Development.",
        paragraph7: "I ´ve been working in different personal projects which you can find here.",
        paragraph8: "Thanks for visiting my website!",
        cv: "My CV",
    },

    contact: {
        title: "Contact",
        subtitle: "Drop me a message",
        send: "Send Message",
        placeholderName: "Your name",
        placeholderMail: "Your email",
        placeholderMsg: "Your message",
    },

    projects: {
        title: "Web Projects",

        gameOver: {
           mainDescription: "It`s an E-commerce website coded with MERN (MongoDB, React, Express and Node)", 
           description1: "Features:",   
           description2: "* Frontend: I used React and Redux to manage the different states. The app was deployed to Firebase.",
           description3: "* Backend: I used Express and NodeJS. I used MongoDB as a data Base (NoSQL) and mongoose to connect. The dataBase was deployed to Heroku.",
           description4: "* Only registered users can buy in the shop.",
           description5: "* Form validator with Express Validator.",
           description6: "* Authentication with JSON Web Token.",
           description7: "* Hashed passwords with bcryptjs.",
           description8: "* CRUD (Create, Read, Update and Delete)"
        },

        freshMarket: {
            mainDescription: "This project is an online store that sells organic products like veggies and fruits. It’s a simple e-commerce website made with JavaScript Vanilla.",
            description1: "The user may add and remove products from their shopping cart, update the cart, change the quantity of each product, and empty the cart.",   
            description2: "Once the shop cart is ready, the user may proceed to checkout. In order to be able to do that, they have to register in the website and then login with their account.",
            description3: "The website also allows to store user data in Local Storage, for example, the shopping cart list.",
        },

        toDo: {
            mainDescription: "A simple list app built in JavaScript Vanilla.",
            description1: "This app allows a user to add new tasks, mark a task as completed and delete old ones. It uses local storage so we can store the ToDo List locally within the user's browser.",
            description2: "Also, there is a message on the screen showing the remaining tasks to be completed.",
            description3: "Another functionality is a filter to see only the completed tasks or the uncompleted ones.",        
        }
    },

    games: {
        title: "Videogames",

        runningKid: {
           mainDescription: "Running Kid is an endless runner game in 3D where you can jump, slide and even destroy wood boxes with your special spinning move !", 
           description1: "Is my first game made in Unity. It was made as a college project and consists only in 1 short and simple level.",   
           description2: "Each time you play, the level is slightly different. It´s procedurally generated. If I put it in really simple words, procedural generation means the data or the content is generated via a certain logic/algorithm, instead of a human creating the content manually.",  
        },

        eBot: {
            mainDescription: "e-bot is a short game prototype coded in Typescript with Cocos Creator 2.4.4", 
            description1: "Is a 2D puzzle-platformer game. The idea is to take at least one robot to the exit door of each level. Only one robot is handled at a time, which can self-destruct or deactivate to make room for new robots.",               
         },

        zackOdyssey: {
            mainDescription: "Collect diamonds, pick super gold coins, defeat enemies and avoid hazards in a cool platformer adventure !", 
            description1: "This is a short game I made for fun in Construct2 to learn some new game mechanics. Only 10 small levels.",               
        },   
    }

}