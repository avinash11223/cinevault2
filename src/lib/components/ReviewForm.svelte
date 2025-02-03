<script lang="ts">
  import { movieStore } from '$lib/stores/movieStore';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  export let movieId: number;
  
  let rating = 0;
  let comment = '';
  
  function handleSubmit() {
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    movieStore.addReview(movieId, { rating, comment });
    comment = '';
    rating = 0;
    dispatch('submitted');
  }

  function handleStarClick(value: number) {
    rating = value;
  }

  function handleStarHover(value: number) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
      star.classList.toggle('hover', index < value);
    });
  }

  function handleStarLeave() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => star.classList.remove('hover'));
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="review-form">
  <div class="rating-input">
    <label>Rating:</label>
    <div class="star-rating">
      {#each Array(5) as _, i}
        <button 
          type="button"
          class="star-btn"
          on:click={() => handleStarClick(i + 1)}
          on:mouseenter={() => handleStarHover(i + 1)}
          on:mouseleave={handleStarLeave}
        >
          {#if i < rating}
            <span class="star filled">★</span>
          {:else}
            <span class="star">☆</span>
          {/if}
        </button>
      {/each}
    </div>
  </div>
  
  <div class="comment-input">
    <label for="comment">Your Review:</label>
    <textarea 
      id="comment"
      bind:value={comment}
      rows="4"
      placeholder="Write your review here..."
      required
    ></textarea>
  </div>
  
  <button type="submit">Submit Review</button>
</form>

<style lang="scss">
  .review-form {
    background: #2a2a40; // Darker background to match the review cards
    padding: 1.5rem;
    border-radius: 8px;
    color: #fff;
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #fff;
    }

    .rating-input {
      margin-bottom: 1rem;
      
      .star-rating {
        display: flex;
        gap: 0.25rem;
      }
      
      .star-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        font-size: 1.5rem;
        
        &:hover .star {
          color: #f5c518;
        }
      }
      
      .star {
        color: #666;
        transition: color 0.2s;
        
        &.filled {
          color: #f5c518;
        }

        &.hover {
          color: #f5c518;
        }
      }
    }
    
    .comment-input {
      margin-bottom: 1.5rem;
      
      textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #3a3a50;
        border-radius: 4px;
        background: #1a1a2e;
        color: #fff;
        font-family: inherit;
        resize: vertical;
        min-height: 100px;

        &:focus {
          outline: none;
          border-color: #f5c518;
        }

        &::placeholder {
          color: #666;
        }
      }
    }
    
    button[type="submit"] {
      background: #f5c518;
      color: #000;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      width: 100%;
      
      &:hover {
        background: darken(#f5c518, 10%);
      }
    }
  }
</style>