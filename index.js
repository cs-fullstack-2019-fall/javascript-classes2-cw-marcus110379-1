//alert("test");
// ### Exercise 1
// Create a Movie class. Make all the following attributes: movieName, rating, and yearReleased. Create three different methods to change each attribute. Outside of the class create two different Movie objects, assign values to each object, and print them to the console.


class Movie{
    constructor(movieName, rating, yearReleased){
        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }
    changeMovie(movieName){
        this.movieName = movieName
    }
    changeRating(changeRating){
       this.changeRating = changeRating
    }
    changeYearReleased(yearReleased){
        this.yearReleased = yearReleased
    }
}


let myMovie = new Movie("Rush Hour", "R", "1998");
let myMovie2 = new Movie("Zoolander", "PG-13", "1997");

console.log(myMovie);

console.log(myMovie2);