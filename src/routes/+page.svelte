<script>
  import { goto } from '$app/navigation';
</script>

<main>
  <h1>PSWDO AICS Demo</h1>
  <div>
    <a href="/intake">Submit Request</a>
  </div>
  <div>
    <a href="/status">Check Status</a>
  </div>
</main>

<footer>
  <button on:click={() => goto('/login')}>Staff Login</button>
</footer>
