import { writable } from 'svelte/store';
import { movies } from '$lib/data/movies';
import type { Movie, Review } from '$lib/types';

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