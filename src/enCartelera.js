const fs = require('fs')
let enCartelera = {
        db:'./data/movies.json',
        titulo: 'Bienvenido a DH movies...',
        leerJSON: function(){
            let moviesJSON = fs.readFileSync(this.db, 'utf-8');
            let movies = JSON.parse(moviesJSON);
            return movies
        },
        cantidad: function(){
            return this.leerJSON().total_movies
        },
        listarPelis: function(){
            let movies = this.leerJSON();
            let peliculas = movies.movies
            return peliculas
        }
    }

module.exports = enCartelera