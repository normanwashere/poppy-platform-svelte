<script>
  import { goto } from '$app/navigation';

  function choose(role) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('role', role);
    }
    goto('/staff/dashboard');
  }
</script>

<h2>Select Role</h2>
<button on:click={() => choose('officer')}>Case Officer</button>
<button on:click={() => choose('head')}>PSWDO Head</button>
