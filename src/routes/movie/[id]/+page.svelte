<script lang="ts">
  import { page } from '$app/stores';
  import { movieStore } from '$lib/stores/movieStore';
  import ReviewForm from '$lib/components/ReviewForm.svelte';
  
  $: movieId = parseInt($page.params.id);
  $: movie = $movieStore.find(m => m.id === movieId);
  $: averageRating = movie?.reviews.length 
    ? (movie.reviews.reduce((acc, rev) => acc + rev.rating, 0) / movie.reviews.length).toFixed(1)
    : 'N/A';
  $: formattedRuntime = movie ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : '';
  
  let showReviewModal = false;
  
  function toggleReviewModal() {
    showReviewModal = !showReviewModal;
  }
</script>

{#if movie}
  <main>
    <div class="movie-header">
      <img src={movie.poster} alt={movie.title} />
      <div class="movie-info">
        <h1>{movie.title}</h1>
        <div class="meta">
          <span class="genre">{movie.genre}</span>
          <span class="runtime">{formattedRuntime}</span>
          <span class="release-date">{new Date(movie.releaseDate).toLocaleDateString()}</span>
        </div>
        <div class="rating">★ {averageRating}</div>
        <p class="description">{movie.description}</p>
      </div>
    </div>

    <section class="reviews">
      <div class="reviews-header">
        <h2>Reviews</h2>
        <button class="add-review-btn" on:click={toggleReviewModal}>Add Review</button>
      </div>
      
      {#if showReviewModal}
        <dialog 
          class="modal-overlay" 
          on:close={toggleReviewModal}
          open
        >
          <div 
            class="modal" 
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button 
              class="close-btn" 
              on:click={toggleReviewModal} 
              aria-label="Close modal"
            >✖</button>
            <h3 id="modal-title">Write a Review</h3>
            <ReviewForm {movieId} on:submitted={toggleReviewModal} />
          </div>
        </dialog>
      {/if}

      <div class="review-list">
        {#each movie.reviews as review}
          <div class="review-card">
            <div class="rating">{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</div>
            <p>{review.comment}</p>
          </div>
        {/each}
      </div>
    </section>
  </main>
{:else}
  <p>Movie not found</p>
{/if}

<style lang="scss">
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background: #1a1a2e;
    color: #fff;
    border-radius: 12px;

    @media (max-width: 768px) {
      padding: 1rem;
      margin: 0 1rem;
    }
  }

  .movie-header {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1rem;
      
      img {
        max-width: 300px;
        margin: 0 auto;
      }
    }

    img {
      width: 100%;
      border-radius: 8px;
    }

    .movie-info {
      h1 {
        margin: 0 0 1rem 0;
        color: #fff;
      }

      .meta {
        display: flex;
        gap: 1.5rem;
        color: #a0a0a0;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
          flex-wrap: wrap;
          gap: 0.75rem;
        }
      }

      .rating {
        color: #f5c518;
        font-size: 1.5rem;
        margin: 1rem 0;
      }

      .description {
        line-height: 1.6;
      }
    }
  }

  .review-card {
    background: #2a2a40;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #3a3a50;
    color: #fff;

    .rating {
      color: #f5c518;
      margin-bottom: 0.5rem;
    }
  }

  .reviews {
    border: 1px solid #3a3a50;
    background: #232338;
    border-radius: 8px;
    padding: 1.5rem;
    margin-top: 2rem;

    h2 {
      margin-bottom: 1rem;
    }

    .review-list {
      display: grid;
      gap: 1rem;
      margin-top: 2rem;
    }
  }

  .reviews-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
      
      .add-review-btn {
        width: 100%;
      }
    }
  }

  .add-review-btn {
    background: #f5c518;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    
    &:hover {
      background: darken(#f5c518, 10%);
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal {
    background: #1a1a2e;
    color: #fff;
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    position: relative;

    h3 {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      width: 95%;
      padding: 1rem;
    }
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    color: #fff;
    
    &:hover {
      color: #a0a0a0;
    }
  }
</style>