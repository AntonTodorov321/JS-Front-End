function movies(inputArray) {
    let movies = [];

    for (const movieData of inputArray) {
        if (movieData.includes("addMovie")) {
            const movie = movieData.split("addMovie ")[1];
            movies.push({ name: movie });
        } else if (movieData.includes("directedBy")) {
            const [movieName, director] = movieData.split(` directedBy `);
            let searchingMovie = movies.find(m => m.name === movieName);

            if (searchingMovie) {
                searchingMovie.director = director;
            }
        } else {
            const [movieName, date] = movieData.split(` onDate `);
            let searchingMovie = movies.find(m => m.name === movieName);

            if (searchingMovie) {
                searchingMovie.date = date;
            }
        }
    }

    for (const movie of movies) {
        if (movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}