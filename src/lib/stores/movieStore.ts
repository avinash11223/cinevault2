import { writable } from 'svelte/store';
import type { Movie, Review } from '$lib/types';

const movies = [
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "releaseDate": "1994-09-23",
    "genre": "Drama",
    "runtime": 142,
    "reviews": [
      { "rating": 5, "comment": "A timeless tale of hope and friendship" },
      { "rating": 5, "comment": "Perfect storytelling from start to finish" }
    ]
  },
  {
    "id": 2,
    "title": "Pulp Fiction",
    "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "releaseDate": "1994-10-14",
    "genre": "Crime",
    "runtime": 154,
    "reviews": [
      { "rating": 5, "comment": "Revolutionary filmmaking at its finest" },
      { "rating": 4, "comment": "Brilliant dialogue and structure" }
    ]
  },
  {
    "id": 3,
    "title": "The Matrix",
    "poster": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    "description": "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
    "releaseDate": "1999-03-31",
    "genre": "Sci-Fi",
    "runtime": 136,
    "reviews": [
      { "rating": 5, "comment": "Changed the action genre forever" },
      { "rating": 5, "comment": "Philosophical themes blend perfectly with action" }
    ]
  },
  {
    "id": 4,
    "title": "Interstellar",
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "releaseDate": "2014-11-07",
    "genre": "Sci-Fi",
    "runtime": 169,
    "reviews": [
      { "rating": 5, "comment": "Visually stunning and emotionally powerful" },
      { "rating": 4, "comment": "Epic scale with intimate human drama" }
    ]
  },
  {
    "id": 5,
    "title": "The Godfather",
    "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "releaseDate": "1972-03-24",
    "genre": "Crime",
    "runtime": 175,
    "reviews": [
      { "rating": 5, "comment": "The definition of a perfect film" },
      { "rating": 5, "comment": "Sets the standard for crime dramas" }
    ]
  },
  {
    "id": 6,
    "title": "Forrest Gump",
    "poster": "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    "releaseDate": "1994-07-06",
    "genre": "Drama",
    "runtime": 142,
    "reviews": [
      { "rating": 5, "comment": "Tom Hanks at his absolute best" },
      { "rating": 4, "comment": "A beautiful journey through history" }
    ]
  },
  {
    "id": 7,
    "title": "The Silence of the Lambs",
    "poster": "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    "releaseDate": "1991-02-14",
    "genre": "Thriller",
    "runtime": 118,
    "reviews": [
      { "rating": 5, "comment": "Masterclass in psychological thriller" },
      { "rating": 5, "comment": "Hopkins gives an unforgettable performance" }
    ]
  },
  {
    "id": 8,
    "title": "Fight Club",
    "poster": "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    "description": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    "releaseDate": "1999-10-15",
    "genre": "Drama",
    "runtime": 139,
    "reviews": [
      { "rating": 5, "comment": "Mind-bending and thought-provoking" },
      { "rating": 4, "comment": "Gets better with every viewing" }
    ]
  },
  {
    "id": 9,
    "title": "Jurassic Park",
    "poster": "https://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
    "description": "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    "releaseDate": "1993-06-11",
    "genre": "Adventure",
    "runtime": 127,
    "reviews": [
      { "rating": 5, "comment": "Revolutionary special effects that still hold up" },
      { "rating": 5, "comment": "Perfect blend of wonder and terror" }
    ]
  },
  {
    "id": 10,
    "title": "Goodfellas",
    "poster": "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
    "releaseDate": "1990-09-12",
    "genre": "Crime",
    "runtime": 146,
    "reviews": [
      { "rating": 5, "comment": "Scorsese at his absolute finest" },
      { "rating": 5, "comment": "The definitive gangster film" }
    ]
  }
];

function createMovieStore() {
  const { subscribe, set, update } = writable<Movie[]>(movies);

  return {
    subscribe,
    addReview: (movieId: number, review: Review) => {
      update(movies => {
        return movies.map(movie => {
          if (movie.id === movieId) {
            return {
              ...movie,
              reviews: [...movie.reviews, review]
            };
          }
          return movie;
        });
      });
    },
    searchMovies: (query: string) => {
      const searchTerm = query.toLowerCase();
      return movies.filter(
        movie =>
          movie.title.toLowerCase().includes(searchTerm) ||
          movie.genre.toLowerCase().includes(searchTerm)
      );
    }
  };
}

export const movieStore = createMovieStore();