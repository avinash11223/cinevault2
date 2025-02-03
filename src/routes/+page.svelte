<script lang="ts">
  import { movieStore } from '$lib/stores/movieStore';
  import MovieCard from '$lib/components/MovieCard.svelte';
  
  let searchQuery = '';
  $: filteredMovies = searchQuery 
    ? movieStore.searchMovies(searchQuery)
    : $movieStore;
</script>

<main>
  <header>
    <h1>CineVault</h1>
    <div class="search-container">
      <input 
        type="text" 
        bind:value={searchQuery} 
        placeholder="Search movies..."
      />
    </div>
  </header>

  <div class="movie-grid">
    {#each filteredMovies as movie (movie.id)}
      <MovieCard {movie} />
    {/each}
  </div>
</main>

<style lang="scss">
  :global(body) {
    background: #1e1e2e; // Rich dark purple-blue background
    color: #fff;
    min-height: 100vh;
  }

  header {
    text-align: center;
    padding: 2rem 0;
  }

  h1 {
    font-size: 3rem;
    color: #fff;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    font-weight: bold;
    background: linear-gradient(45deg, #6c72cb, #8f94fb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
  }

  .search-container {
    max-width: 800px; // Increased width
    margin: 0 auto 2rem;
    padding: 0 1rem;

    input {
      width: 100%;
      padding: 1rem 1.5rem; // Bigger padding
      border-radius: 50px; // Rounded search bar
      border: 2px solid #6c72cb; // Purple border
      background: #2d2d44;
      color: #fff;
      font-size: 1.2rem; // Bigger font
      transition: all 0.3s ease;

      &::placeholder {
        color: #a0a0a0;
      }

      &:focus {
        outline: none;
        border-color: #8f94fb;
        box-shadow: 0 0 15px rgba(108, 114, 203, 0.3);
      }
    }
  }

  .movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .movie-card {
    background: #2d2d44; // Darker purple-blue for cards
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid #6c72cb;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(108, 114, 203, 0.3);
    }

    img {
      width: 100%;
      height: 375px;
      object-fit: cover;
    }

    .movie-info {
      padding: 1rem;

      h2 {
        margin: 0;
        font-size: 1.2rem;
        color: #fff;
      }

      .meta {
        color: #b4b4d9;
        font-size: 0.9rem;
        margin: 0.5rem 0;
      }

      .rating {
        color: #ffd700; // Brighter gold color for stars
        font-weight: bold;
      }
    }
  }
</style>