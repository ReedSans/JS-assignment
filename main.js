//
// //
// // // VARIABLES
let filmTitle;
let filmRating;
const watchlist = []

//
// //
// // //FUNCTIONS
const promptUser = function(){
    filmTitle = window.prompt("What movie are you interested in seeing?")
    filmRating = window.prompt("Enter the imdb rating")

    //
    // //
    // // //CONDITIONALS
    if (filmRating > 5 && !isFinite(filmTitle)){
        addToWatchlist(filmTitle)
        document.getElementById('target').innerHTML = `Here's your movie watchlist: ${watchlist}`
    } else if (filmRating < 4.5){
        window.alert("Rating is too low to be added to the watchlist")
    } else {
        window.alert("Invalid movie title. Cannot accept only numbers")
    }
}

const addToWatchlist = function(title){
    watchlist.push(title)
}

const addButton = document.getElementById('add-btn')
addButton.addEventListener('click', promptUser)




