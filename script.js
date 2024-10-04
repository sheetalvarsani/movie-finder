let userName = "";
let movieResults = [];

// Capitalises the first letter of the name and makes the rest lowercase
function capitaliseName(name) {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Displays greeting message
function displayGreeting() {
    userName = prompt("What is your name?");
    userName = capitaliseName(userName);

    const greetElement = document.getElementById("greet");
    
    if (!userName) {
        greetElement.innerHTML = "Please enter a valid name!";
        return;
    } 
    
    greetElement.innerHTML = `Hello <span class="user-name">${userName}</span>! Let's plan your Movie Night!`;
    updateUIForGreeting();
}

// Updates UI elements for greeting state
function updateUIForGreeting() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("genreButton").style.display = "block";
    document.getElementById("resetButton").style.display = "block";

    const messages = document.getElementsByClassName("message");
    for (const message of messages) {
        message.style.display = "block";
    }
}

// Chooses the genre and displays corresponding movies
function chooseGenre() {
    const chosenGenre = prompt("What movie genre are you feeling?").toLowerCase();
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";  // Clear previous movie listings

    document.getElementById("hiddenMovieContent").style.display = "block";
    document.getElementById("genreButton").style.display = "none";

    document.getElementById("genreResults").innerHTML =
        `<span class="user-name">${userName}</span>'s results for ${chosenGenre.toUpperCase()} movies:<br><br>`;

    displayMovies(chosenGenre);
}

// Displays movies based on the selected genre
function displayMovies(chosenGenre) {
    const movieList = document.getElementById("movie-list");
    let foundMovies = false;

    // Clear previous movie results before fetching new ones
    movieResults = [];

    for (const movie of movies) {
        if (movie.genre.includes(chosenGenre)) {
            foundMovies = true;
            movieResults.push(movie); // Save found movies
            movieList.appendChild(createMovieElement(movie));
        }
    }

    if (foundMovies) {
        showResultsUI();
    } else {
        showNoMoviesFound(chosenGenre);
    }
}

// Creates a movie element to display
function createMovieElement(movie) {
    const movieContainer = document.createElement("div");
    movieContainer.className = "movie-details";

    movieContainer.appendChild(createElement("img", { 
        className: "movie-poster", 
        src: movie.poster, 
        alt: `${movie.title} Poster` 
    }));
    movieContainer.appendChild(createElement("p", { 
        className: "movie-title", 
        textContent: movie.title 
    }));
    movieContainer.appendChild(createElement("p", { 
        className: "movie-description", 
        textContent: `Summary: ${movie.plot}` 
    }));
    movieContainer.appendChild(createElement("p", { 
        className: "movie-runtime", 
        textContent: `Runtime: ${movie.runtime} minutes` 
    }));
    movieContainer.appendChild(createElement("p", { 
        className: "movie-cast", 
        textContent: `Cast: ${movie.cast.join(", ")}` 
    }));

    return movieContainer;
}

// Creates an HTML element with specified attributes
function createElement(tag, attributes) {
    const element = document.createElement(tag);
    Object.assign(element, attributes);
    return element;
}

// Displays UI for when movies are found
function showResultsUI() {
    document.getElementById("greet").style.display = "none";
    document.getElementById("chooseAgainButton").style.display = "block";
    document.getElementById("finishButton").style.display = "block";
}

// Shows message when no movies are found
function showNoMoviesFound(chosenGenre) {
    document.getElementById("genreResults").innerHTML =
        `No movies found for ${chosenGenre.toUpperCase()}. Please see options below:<br><br>Adventure | Action | Drama | Fantasy | Romance | Thriller | Horror | Musical | Comedy | Mystery | Animation`;
    document.getElementById("genreButton").style.display = "none";
    document.getElementById("chooseAgainButton").style.display = "block";
}

function finish() {
    // Set the h1 text to "Enjoy Movie Night"
    document.querySelector('h1').innerHTML = "🍿 Enjoy 🍿 <br> Movie Night! ";

    // Hide all other elements
    const elementsToHide = [
        "greet", 
        "hiddenMovieContent", 
        "chooseAgainButton", 
        "finishButton", 
        "genreResults", 
        "movie-list",
        "startButton",
        "genreButton"
    ];
    
    elementsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = "none"; // Hide the element
        }
    });
}

// Resets the user interface to the initial state
function resetUI() {
    const elementsToHide = [
        "greet", 
        "hiddenMovieContent", 
        "chooseAgainButton", 
        "finishButton", 
        "genreResults", 
        "movie-list"
    ];
    
    elementsToHide.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    resetValues();
}

// Resets all values and UI elements
function resetValues() {
    document.getElementById("startButton").style.display = "block";
    document.getElementById("genreButton").style.display = "none";
    document.getElementById("greet").innerHTML = "";
    document.getElementById("genreResults").innerHTML = "";
    document.getElementById("movie-list").innerHTML = ""; // Clear movie list

    document.querySelector('h1').innerHTML = "🍿 Movie Night 🍿 <br /> Planner";

    const messages = document.getElementsByClassName("message");
    for (const message of messages) {
        message.style.display = "none";
    }

    userName = "";
}

// Event listeners for buttons
document.getElementById("resetButton").addEventListener("click", resetUI); // Ensure resetUI is used
document.getElementById("finishButton").addEventListener("click", finish);
