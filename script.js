const movies = [
    {
        title: "The Lord of the Rings Trilogy",
        plot: "Group spends 9 hours returning jewellery",
        runtime: 558,
        cast: ["Elijah Wood", "Ian McKellan", "Orlando Bloom"],
        genre: ["adventure", "action", "drama"],
        poster: "https://www.slashfilm.com/img/gallery/get-your-first-look-at-the-proto-hobbits-the-harfoots-in-the-lord-of-the-rings-the-rings-of-power/intro-1654525596.jpg",
    },
    {
        title: "Stardust",
        plot: "Old timey nice guy falls in love with a star ",
        runtime: 127,
        cast: ["Charlie Cox", "Claire Danes", "Michelle Pfeiffer"],
        genre: ["fantasy", "adventure", "romance"],
        poster: "https://parentpreviews.com/images/made/legacy-pics/stardust-1_960_540_80.jpg",
    },

    {
        title: "Parasite",
        plot: "Family works hard to get a new house",
        runtime: 132,
        cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
        genre: ["thriller", "drama"],
        poster: "https://i0.wp.com/cedars.cedarville.edu/wp/wp-content/uploads/2020/05/Parasite-scaled.jpg?fit=777%2C1200&ssl=1",
    },
    {
        title: "Split",
        plot: "Man talks to himself for the best part of 2 hours",
        runtime: 117,
        cast: ["James McAvoy", "Anya Taylor-Joy"],
        genre: ["thriller", "horror"],
        poster: "https://cdn.vox-cdn.com/thumbor/FFyjm4Fe5CaTlRc5YpUQQkPBztI=/0x0:1920x1080/1400x1050/filters:focal(833x133:1139x439):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/52810897/splitcover.0.png",
    },
    {
        title: "Mission: Impossible - Rogue Nation",
        plot: "The same as the other Mission Impossible films, but with more Simon Pegg",
        runtime: 131,
        cast: ["Tom Cruise", "Simon Pegg", "Rebecca Ferguson"],
        genre: ["action", "adventure"],
        poster: "https://resizing.flixster.com/KFFYzJYFNrgxs2Y0VhC2ZLnVLNM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI1ZjUxNDJlLTQ1M2YtNDQyYi04NWEyLWNjN2M4YzMxM2JjOC53ZWJw",
    },
    {
        title: "The Greatest Showman",
        plot: "Wolverine starts a circus and ruins his marriage",
        runtime: 105,
        cast: ["Hugh Jackman", "Michelle Williams", "Zac Efron"],
        genre: ["musical", "drama"],
        poster: "https://upload.wikimedia.org/wikipedia/en/1/10/The_Greatest_Showman_poster.png",
    },
    {
        title: "Jumanji: Welcome To The Jungle",
        plot: "The worst game night",
        runtime: 119,
        cast: ["Dwayne Johnson", "Karen Gillan", "Kevin Hart"],
        genre: ["adventure", "action", "comedy"],
        poster: "https://cdn.vox-cdn.com/thumbor/b4L5shm4FacTl-tWFYxkfcSmO7o=/0x0:2700x1350/920x613/filters:focal(1134x459:1566x891):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58026259/jumanjicover.0.jpg",
    },
    {
        title: "The Shining",
        plot: "A family's first Airbnb experience goes very wrong",
        runtime: 146,
        cast: ["Jack Nicholson", "Shelley Duvall"],
        genre: ["horror", "drama"],
        poster: "https://flxt.tmsimg.com/assets/p40_v_v12_sk.jpg",
    },
    {
        title: "The Proposal",
        plot: "Boss falls in love with their secretary",
        runtime: 108,
        cast: ["Sandra Bullock", "Ryan Reynolds"],
        genre: ["comedy", "romance", "drama"],
        poster: "https://resizing.flixster.com/RNp2DpwJESA0qRiCJUskEnVCtqk=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p192250_p_v8_ap.jpg",
    },
    {
        title: "The Girl On The Train",
        plot: "A girl on a train",
        runtime: 112,
        cast: ["Emily Blunt", "Rebecca Ferguson", "Haley Bennet"],
        genre: ["mystery", "drama"],
        poster: "https://ychef.files.bbci.co.uk/1600x900/p04b5qhr.webp",
    },
    {
        title: "Shrek",
        plot: "Outcast and his sidekick wingmen a Lord",
        runtime: 90,
        cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
        genre: ["animation", "comedy", "musical"],
        poster: "https://static.independent.co.uk/2023/04/04/15/newFile-5.jpg",
    },
    {
        title: "Mulan",
        plot: "Girl has to pretend she's a man to be taken seriously",
        runtime: 87,
        cast: ["Ming-Na Wen", "Eddie Murphy"],
        genre: ["animation", "adventure", "comedy"],
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg?region=0%2C0%2C540%2C810",
    },
    {
        title: "Knives Out",
        plot: "A family reunion goes south when a mystery writer is found dead",
        runtime: 130,
        cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"],
        genre: ["mystery"],
        poster: "https://www.julienjamar.com/wp-content/uploads/2020/03/Knives-Out-Promo.jpg",
    },
];

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
