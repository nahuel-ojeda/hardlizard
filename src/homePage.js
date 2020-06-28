const fs = require('fs')

let homePage = {
db:'./data/movies.json',
titulo: "Bienvenido a DH Movies...",
leeJSON: function(){
    let moviesJSON = fs.readFileSync(this.db,'utf-8');
    let movies = JSON.parse(moviesJSON);
    return movies
},
cantidad: function(){
    return this.leeJSON().total_movies
},
listarPelis:function(){
    let movies = this.leeJSON();
    let titleMovies = [];
    movies.movies.forEach(function(movie){
        titleMovies.push(movie.title) 
    });
    titleMovies.sort();
    return titleMovies
}

}
module.exports = homePage