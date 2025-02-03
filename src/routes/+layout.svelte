<script>
  import '../app.scss';
</script>

<header>
  <nav>
    <a href="/" class="logo">🎬 CineVault</a>
  </nav>
</header>

<slot />

<style lang="scss">
  header {
    background: #1a1a1a;
    color: white;
    padding: 1rem;
    margin-bottom: 2rem;

    nav {
      max-width: 1200px;
      margin: 0 auto;
      
      .logo {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        
        &:hover {
          color: #f5c518;
        }
      }
    }
  }
</style>