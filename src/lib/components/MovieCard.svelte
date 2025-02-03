<script lang="ts">
  import type { Movie } from '$lib/types';
  
  export let movie: Movie;
  
  $: averageRating = movie.reviews.length 
    ? (movie.reviews.reduce((acc, rev) => acc + rev.rating, 0) / movie.reviews.length).toFixed(1)
    : 'N/A';

  // Format runtime to hours and minutes
  $: formattedRuntime = `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`;
</script>

<a href="/movie/{movie.id}" class="card">
  <img src={movie.poster} alt={movie.title} />
  <div class="content">
    <h2>{movie.title}</h2>
    <div class="meta">
      <span class="genre">{movie.genre}</span>
      <span class="runtime">{formattedRuntime}</span>
    </div>
    <div class="rating">★ {averageRating}</div>
  </div>
</a>

<style lang="scss">
  .card {
    display: block;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s;
    text-decoration: none;
    color: inherit;
    
    &:hover {
      transform: translateY(-4px);
    }
    
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    
    .content {
      padding: 1rem;
      
      h2 {
        margin: 0;
        font-size: 1.25rem;
      }
      
      .meta {
        display: flex;
        gap: 1rem;
        margin: 0.5rem 0;
        color: #666;
        font-size: 0.9rem;
      }
      
      .rating {
        color: #f5c518;
        font-weight: bold;
      }
    }
  }
</style>