interface Movie {
    id: number;
    title: string;
    poster: string;
    description: string;
    releaseDate: string;
    genre: string;
    runtime: number; 
    reviews: Review[];
  }
  
  interface Review {
    rating: number;
    comment: string;
  }
  
  export type { Movie, Review };