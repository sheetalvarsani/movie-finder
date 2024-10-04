let userName = "";

function capitaliseName(name) {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function greeting() {
    userName = prompt("What is your name?");
    userName = capitaliseName(userName);

    if (!userName) {
        output = "Please enter a valid name!";
        document.getElementById("greet").innerHTML = output;
        return;
    } else {
        output = `Hello <span class="user-name">${userName}</span>! Let's plan your Movie Night!`;
    }

    document.getElementById("greet").innerHTML = output;
    document.getElementById("startButton").style.display = "none";
    document.getElementById("genreButton").style.display = "block";
    document.getElementById("resetButton").style.display = "block";

    const messages = document.getElementsByClassName("message");
    for (let i = 0; i < messages.length; i++) {
        messages[i].style.display = "block";
    }
}

function chooseGenre() {
    let chosenGenre = prompt("What movie genre are you feeling?").toLowerCase();
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";
    let foundMovies = false;

    document.getElementById("hiddenMovieContent").style.display = "block";
    document.getElementById("genreButton").style.display = "none";

    document.getElementById("genreResults").innerHTML =
        `<span class="user-name">${userName}</span>'s results for ` +
        chosenGenre.toUpperCase() +
        " movies :<br><br>";

    for (const movie of movies) {
        if (movie.genre.includes(chosenGenre)) {
            foundMovies = true;

            const movieTitle = document.createElement("p");
            movieTitle.textContent = movie.title;
            movieTitle.className = "movie-title";

            const moviePlot = document.createElement("p");
            moviePlot.textContent = `Summary: ${movie.plot}`;
            moviePlot.className = "movie-description";

            const movieRuntime = document.createElement("p");
            movieRuntime.textContent = `Runtime: ${movie.runtime} minutes`;
            movieRuntime.className = "movie-runtime";

            const movieCast = document.createElement("p");
            movieCast.textContent = `Cast: ${movie.cast.join(", ")}`;
            movieCast.className = "movie-cast";

            const moviePoster = document.createElement("img");
            moviePoster.className = "movie-poster";
            moviePoster.src = movie.poster;
            moviePoster.alt = `${movie.title} Poster`;

            const movieContainer = document.createElement("div");
            movieContainer.className = "movie-details";
            movieContainer.appendChild(moviePoster);
            movieContainer.appendChild(movieTitle);
            movieContainer.appendChild(moviePlot);
            movieContainer.appendChild(movieRuntime);
            movieContainer.appendChild(movieCast);

            movieList.appendChild(movieContainer);
        }
    }

    if (foundMovies) {
        document.getElementById("greet").style.display = "none";
        document.getElementById("chooseAgainButton").style.display = "block";
        document.getElementById("finishButton").style.display = "block";
    } else {
        document.getElementById("genreResults").innerHTML =
            "No movies found for " +
            chosenGenre.toUpperCase() +
            ". Please see options below:<br><br>Adventure | Action | Drama | Fantasy | Romance | Thriller | Horror | Musical | Comedy | Mystery | Animation";
        document.getElementById("genreButton").style.display = "none";
        document.getElementById("chooseAgainButton").style.display = "block";
    }
}

document.getElementById("finishButton").addEventListener("click", function () {
    document.getElementById("finalMessage").style.display = "block";

    document.getElementById("greet").style.display = "none";
    document.getElementById("hiddenMovieContent").style.display = "none";
    document.getElementById("chooseAgainButton").style.display = "none";
    document.getElementById("finishButton").style.display = "none";
    document.getElementById("genreResults").style.display = "none";
    document.getElementById("movie-list").style.display = "none";
});

function reset() {
    document.getElementById("startButton").style.display = "block";
    document.getElementById("genreButton").style.display = "none";
    document.getElementById("chooseAgainButton").style.display = "none";
    document.getElementById("finishButton").style.display = "none";

    document.getElementById("greet").innerHTML = "";
    document.getElementById("genreResults").innerHTML = "";
    document.getElementById("movie-list").innerHTML = "";

    document.getElementById("finalMessage").style.display = "none";
    document.getElementById("finalMessage").innerHTML = "";

    const messages = document.getElementsByClassName("message");
    for (let i = 0; i < messages.length; i++) {
        messages[i].style.display = "none";
    }

    userName = "";
}

document.getElementById("resetButton").addEventListener("click", reset);
