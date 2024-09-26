// This web app will give you movie suggestions and help you plan your movie night!

// Database (array) of movies with objects:

const movies = [
    {
      title: "The Lord of the Rings Trilogy",
      plot: "Group spends 9 hours returning jewellery",
      runtime: 558,
      cast: ["Elijah Wood", "Ian McKellan", "Orlando Bloom"],
      genre: ["adventure", "action", "drama"],
      poster:
        "https://www.slashfilm.com/img/gallery/get-your-first-look-at-the-proto-hobbits-the-harfoots-in-the-lord-of-the-rings-the-rings-of-power/intro-1654525596.jpg"
    },
    {
      title: "Stardust",
      plot: "Old timey nice guy falls in love with a star ",
      runtime: 127,
      cast: ["Charlie Cox", "Claire Danes", "Michelle Pfeiffer"],
      genre: ["fantasy", "adventure", "romance"],
      poster:
        "https://parentpreviews.com/images/made/legacy-pics/stardust-1_960_540_80.jpg"
    },
  
    {
      title: "Parasite",
      plot: "Family works hard to get a new house",
      runtime: 132,
      cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
      genre: ["thriller", "drama"],
      poster:
        "https://i0.wp.com/cedars.cedarville.edu/wp/wp-content/uploads/2020/05/Parasite-scaled.jpg?fit=777%2C1200&ssl=1"
    },
    {
      title: "Split",
      plot: "Man talks to himself for the best part of 2 hours",
      runtime: 117,
      cast: ["James McAvoy", "Anya Taylor-Joy"],
      genre: ["thriller", "horror"],
      poster:
        "https://cdn.vox-cdn.com/thumbor/FFyjm4Fe5CaTlRc5YpUQQkPBztI=/0x0:1920x1080/1400x1050/filters:focal(833x133:1139x439):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/52810897/splitcover.0.png"
    },
    {
      title: "Mission:Impossible-Rogue Nation",
      plot:
        "The same as the other Mission Impossible films, but with more Simon Pegg",
      runtime: 131,
      cast: ["Tom Cruise", "Simon Pegg", "Rebecca Ferguson"],
      genre: ["action", "adventure"],
      poster:
        "https://resizing.flixster.com/KFFYzJYFNrgxs2Y0VhC2ZLnVLNM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI1ZjUxNDJlLTQ1M2YtNDQyYi04NWEyLWNjN2M4YzMxM2JjOC53ZWJw"
    },
    {
      title: "The Greatest Showman",
      plot: "Wolverine starts a circus and ruins his marriage",
      runtime: 105,
      cast: ["Hugh Jackman", "Michelle Williams", "Zac Efron"],
      genre: ["musical", "drama"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/10/The_Greatest_Showman_poster.png"
    },
    {
      title: "Jumanji: Welcome To The Jungle",
      plot: "The worst family game night",
      runtime: 119,
      cast: ["Dwayne Johnson", "Karen Gillan", "Kevin Hart"],
      genre: ["adventure", "action", "comedy"],
      poster:
        "https://cdn.vox-cdn.com/thumbor/b4L5shm4FacTl-tWFYxkfcSmO7o=/0x0:2700x1350/920x613/filters:focal(1134x459:1566x891):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58026259/jumanjicover.0.jpg"
    },
    {
      title: "The Shining",
      plot: "A family's first Airbnb experience goes very wrong",
      runtime: 146,
      cast: ["Jack Nicholson", "Shelley Duvall"],
      genre: ["horror", "drama"],
      poster: "https://flxt.tmsimg.com/assets/p40_v_v12_sk.jpg"
    },
    {
      title: "The Proposal",
      plot: "Boos falls in love with their secretary",
      runtime: 108,
      cast: ["Sandra Bullock", "Ryan Reynolds"],
      genre: ["comedy", "romance", "drama"],
      poster:
        "https://cms.giggster.com/guide/directus/assets/8141e0f8-2334-4e17-9444-11b032174654?fit=cover&width=400&quality=80"
    },
    {
      title: "The Girl On The Train",
      plot: "A girl on a train",
      runtime: 112,
      cast: ["Emily Blunt", "Rebecca Ferguson", "Haley Bennet"],
      genre: ["mystery", "drama"],
      poster: "https://ychef.files.bbci.co.uk/1600x900/p04b5qhr.webp"
    },
    {
      title: "Shrek",
      plot: "Outcast and his sidekick wingmen a Lord",
      runtime: 90,
      cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
      genre: ["animation", "comedy", "musical"],
      poster: "https://static.independent.co.uk/2023/04/04/15/newFile-5.jpg"
    },
    {
      title: "Mulan",
      plot: "Girl has to pretend she's a man to be taken seriously",
      runtime: 87,
      cast: ["Ming-Na Wen", "Eddie Murphy"],
      genre: ["animation", "adventure", "comedy"],
      poster:
        "https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg?region=0%2C0%2C540%2C810"
    }
  ];
  
  /*-----------------------------------------------------------------------*/
  
  console.log(`There are ${movies.length} movies in the database`); // prints "There are 12 movies in the database" to the console
  
  // Welcome alert:
  alert("Welcome to the Movie Night Planner! Click OK to get started 📽 ");
  
  // Step 1: Let's begin - get user's name and begin:
  
  function greeting() {
    let output;
    const name = prompt("What is your name?");
    if (name == null || name == "") {
      output = "Please try again!";
    } else {
      output = `Hello <span class="user-name">${name}</span>! Let's plan your Movie Night!`;
    }
    document.getElementById("startButton").style.display = "none"; // hide previous button
    document.getElementById("genreButton").style.display = "block"; // show next button
    document.getElementById("resetButton").style.display = "block"; // reset button on show
    document.getElementById("greet").innerHTML = output;
  }
  
  // Step 2: Choose Genre - get user's genre choice and provide movie recommendations:
  
  function chooseGenre() {
    let chosenGenre = prompt("What movie genre are you feeling?").toLowerCase();
    const movieList = document.getElementById("movie-list");
    let foundMovies = false; // check if any movies found
  
    // Check if the chosen genre exists in the movie's genre array
    for (const movie of movies) {
      if (movie.genre.includes(chosenGenre)) {
        foundMovies = true; // Set the flag to true since at least one movie was found
        document.getElementById("genreResults").innerHTML =
          "Here are your movie results for " +
          chosenGenre.toUpperCase() +
          " :<br><br>";
  
        // Create HTML elements to display the movie details:
        const movieTitle = document.createElement("h2");
        movieTitle.textContent = movie.title;
  
        const moviePlot = document.createElement("p");
        moviePlot.textContent = `Summary: ${movie.plot}`;
  
        const movieRuntime = document.createElement("p");
        movieRuntime.textContent = `Runtime: ${movie.runtime} minutes`;
        movieRuntime.id = "tagline";
  
        const movieCast = document.createElement("p");
        movieCast.textContent = `Cast: ${movie.cast.join(", ")}`;
        movieCast.id = "tagline";
  
        const moviePoster = document.createElement("img");
        moviePoster.className = "movie-poster";
        moviePoster.src = movie.poster;
        moviePoster.alt = `${movie.title} Poster`;
  
        // Create a container div for the movie details
        const movieContainer = document.createElement("article");
        movieContainer.className = "movie-details";
        movieContainer.appendChild(moviePoster);
        movieContainer.appendChild(movieTitle);
        movieContainer.appendChild(moviePlot);
        movieContainer.appendChild(movieRuntime);
        movieContainer.appendChild(movieCast);
  
        // Append the movie container to the movie list
        movieList.appendChild(movieContainer);
      }
  
      if (foundMovies) {
        document.getElementById("greet").style.display = "none"; // hide previous message
        document.getElementById("genreButton").style.display = "none"; // hide previous button
        document.getElementById("tryAgainGenreButton").style.display = "none"; // hide previous button
        document.getElementById("advanceButton").style.display = "block"; // show next button
      } else {
        document.getElementById("genreResults").innerHTML =
          "No movies found for " +
          chosenGenre.toUpperCase() +
          ". Please try an alternate genre!";
        document.getElementById("genreButton").style.display = "none";
        document.getElementById("tryAgainGenreButton").style.display = "block";
      }
    }
  }
  
  // Function for 'Try another genre':
  function tryAgainGenre() {
    chooseGenre();
  }
  
  // Step 3: Movie Options viewed so continue: advanceButton:
  
  function advance() {
    document.getElementById("genreResults").innerHTML = ""; // clear movie recommendations
    document.getElementById("advanceButton").style.display = "none"; // hide previous button
    document.getElementById("snackButton").style.display = "block"; // show next button
  
    const movieList = document.getElementById("movie-list"); // hide movie recommendations
    movieList.innerHTML = " ";
  }
  
  // Step 4: Ask if they want a movie snack recommendation:
  // If yes, user recieves message to click next button
  // If no, this is the end of the web app and user receives final message
  
  function needSnack() {
    const yesSnack = confirm("Would you like some snack ideas?");
    if (yesSnack) {
      document.getElementById("snackButton").style.display = "none"; // hide previous button
      document.getElementById("sweetOrSaltyButton").style.display = "block"; // show next button
    } else {
      document.getElementById("snackButton").style.display = "none"; // hide previous button
      document.getElementById("finishButton").style.display = "block"; // show next button
    }
  }
  
  // Step 5: Sweet or Salty nsack suggestions (optional):
  
  function snackOptions() {
    let finalSnack;
    const sweetOrSalty = prompt("sweet or salty").toLowerCase();
    // if response is sweet:
    if (sweetOrSalty === "sweet") {
      finalSnack =
        "How about one (or all!) of these:<br><br>Caramel Popcorn 🍿<br>Skittles 🌈<br>Chocolate Chip Cookies 🍪";
      // if response is salty:a
    } else if (sweetOrSalty === "salty") {
      finalSnack =
        "How about one (or all!) of these:<br><br>Butter Popcorn🍿<br>Cheesy Nachos with Spicy Salsa🧀🌶️<br>Pretzels🥨";
      // if response is anything else:
    } else {
      finalSnack = "Please try again!";
    }
    document.getElementById("sweetOrSalty").innerHTML = finalSnack;
    document.getElementById("sweetOrSaltyButton").style.display = "none"; // hide previous button
    document.getElementById("finishButton").style.display = "block"; // show finish button
  }
  
  // Click to Finish button:
  
  finishButton.addEventListener("click", function () {
    finishButton.textContent = "Thank you! Enjoy your Movie Night!"; // changes button text
    finishButton.style.background = "black"; // changes button colour
  });
  
  // Reset Button to Start Again:
  
  function reset() {
    // Reset the visibility of buttons
    document.getElementById("startButton").style.display = "block";
    document.getElementById("genreButton").style.display = "none";
    document.getElementById("tryAgainGenreButton").style.display = "none";
    document.getElementById("advanceButton").style.display = "none";
    document.getElementById("snackButton").style.display = "none";
    document.getElementById("sweetOrSaltyButton").style.display = "none";
    document.getElementById("finishButton").style.display = "none";
    document.getElementById("resetButton").style.display = "none";
  
    // Clear displayed content
    document.getElementById("greet").innerHTML = "";
    document.getElementById("genreResults").innerHTML = "";
    document.getElementById("movie-list").innerHTML = "";
    document.getElementById("snackResults").innerHTML = "";
    document.getElementById("sweetOrSalty").innerHTML = "";
  
    // Reset the "Finish" button text and color
    finishButton.textContent = "Click to Finish";
    finishButton.style.background = "#013220";
  }
  
  // Attach the reset function to the "Reset" button click event
  document.getElementById("resetButton").addEventListener("click", reset);
  