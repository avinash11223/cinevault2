import type { Movie } from '$lib/types';

// Load movie data from JSON file
export const movies: Movie[] = (await import('./movies.json')).default;