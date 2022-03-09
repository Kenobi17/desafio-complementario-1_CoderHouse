const data = {
  studentsTitle: 'Alumnos',
  studentsStyle: {
    color: 'red',
    background: 'orange',
  },
  studentsHeaders: ['id', 'Nombre', 'Apellido', 'Edad'],
  students: [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Perez',
      age: '19',
    },
    {
      id: 2,
      name: 'John',
      lastName: 'Doe',
      age: '28',
    },
    {
      id: 3,
      name: 'Jane',
      lastName: 'Doe',
      age: '20',
    },
  ],

  seriesTitle: 'Series',
  seriesStyle: {
    color: 'white',
    background: 'black',
  },
  seriesHeaders: ['id', 'Nombre', 'Rating', 'Temporadas'],
  series: [
    {
      id: 1,
      name: 'Mr. Robot',
      rating: 10,
      seasons: 4,
    },
    {
      id: 2,
      name: 'BoJack Horseman',
      rating: 10,
      seasons: 6,
    },
    {
      id: 3,
      name: 'Brooklyn Nine-Nine',
      rating: 8.5,
      seasons: 8,
    },
  ],

  moviesTitle: 'Peliculas',
  moviesHeaders: ['id', 'Nombre', 'Rating', 'Año de estreno'],
  movies: [
    {
      id: 1,
      name: 'Spiderman No Way Home',
      rating: 8.5,
      year: 2021,
    },
    {
      id: 2,
      name: 'Scream',
      rating: 8,
      year: 2022,
    },
    {
      id: 3,
      name: 'Superbad',
      rating: 9,
      year: 2007,
    },
  ],
};

module.exports = data;
