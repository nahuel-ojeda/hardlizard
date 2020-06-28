const homePage = require("./homePage");
const enCartelera = require("./enCartelera");
const masVotadas = require("./masVotadas");
const sucursales = require("./sucursales");
const contacto = require("./contacto");
const preguntasFrecuentes = require("./preguntasFrecuentes");

let index = {
  homePage: function (res) {
    res.write(homePage.titulo);
    res.write(`

cantidad:  ${homePage.cantidad()}

`);
    let pelis = homePage.listarPelis();
    for (peli of pelis) {
      res.write("peliculas: " + peli);
    }
    res.write("\n");
    res.end(`Recordá que podes visitar las secciones:
i. En Cartelera
ii. Más Votadas
iii. Sucursales
iv. Contacto
v. Preguntas Frecuentes`);
res.end()
},

  enCartelera: function (res) {
    res.write(enCartelera.titulo);
    res.write(`Total de películas en cartelera: ${homePage.cantidad()}
    
    Listado de Peliculas en Cartelera
    `);
    let movies = enCartelera.listarPelis();
    for(movie of movies) {
      res.write(`${movie.title}
      
      ${movie.overview}`);
    };
    res.end();
  },
  masVotadas: function (res) {
    res.write(masVotadas.titulo);
    res.write(`Total de películas en cartelera: " + ${masVotadas.cantidad()}

    Listado de Peliculas de mayor Rating
    
    
    `);

    let movies = masVotadas.listarPelis();
    movies.forEach(function (movie) {
      res.write(`${movie.title}  
      
      "rating: " ${movie.vote_average}


      
      ${movie.overview}`
      
      );
    });
    res.end();
  },
  sucursales: function (res) {
    res.write(sucursales.titulo);
    res.write(`Total de películas en cartelera:   ${sucursales.cantidad()}

    Listado de Salas disponibles
    
    `);
    let theaters = sucursales.listarCines();
    theaters.forEach(function (theater) {
      res.write('\n');
      res.write(theater.name);
      res.write('\n');
      res.write(theater.address);
      res.write('\n');
      res.write(theater.description);
  });
  res.end()
    },
  
  contacto: function (res) {
    res.write(contacto.Titulo);
        res.write('\n\n');
        res.write(contacto.Contenido)
        res.end()
  },
  preguntasFrecuentes: function (res) {
    res.write(preguntasFrecuentes.titulo);
    res.write(`Total de preguntas: ${preguntasFrecuentes.cantidad()}


    Listado de Preguntas Frecuentes
    
    `);

    let faqs = preguntasFrecuentes.listarFaqs();
       for (faq of faqs) {
            res.write('\n');
            res.write('Pregunta: ' + faq.faq_title);
            res.write('\n');
            res.write('Resúesta: ' + faq.faq_answer);
            res.write('\n');
           
        }

    res.end();
  },
};
module.exports = index;