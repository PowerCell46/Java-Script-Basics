function movieRatings(input) {
let index = 0;
let numberOfFilms = Number(input[index]);
index++;
let movieName = "";
let rating = 0;

let averageRating = 0;

let bestFilmName = "";
let bestFilmRating = 0;

let worstFilmName = "";
let worstFilmRating = 100;

for( let currentMovie = 0; currentMovie < numberOfFilms; currentMovie++) {

    movieName = input[index];
    index++;
    rating = Number(input[index]);
    averageRating += rating;

    if(rating > bestFilmRating) {
        bestFilmName = movieName;
        bestFilmRating = rating;
    } 
    if(rating < worstFilmRating) {
        worstFilmName = movieName;
        worstFilmRating = rating;
    }
    index++;
}

averageRating  = (averageRating / numberOfFilms);

console.log(bestFilmName + " is with highest rating: " + bestFilmRating.toFixed(1));
console.log(worstFilmName + " is with lowest rating: " + worstFilmRating.toFixed(1));
console.log("Average rating: " + averageRating.toFixed(1));
}

movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])