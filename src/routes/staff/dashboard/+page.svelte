<script>
  import { onMount } from 'svelte';
  let role = '';
  onMount(() => {
    role = typeof localStorage !== 'undefined' ? localStorage.getItem('role') || '' : '';
  });
</script>

{#if role === 'head'}
  <h2>PSWDO Head Dashboard</h2>
{:else if role === 'officer'}
  <h2>Case Officer Dashboard</h2>
{:else}
  <p>No role selected.</p>
{/if}
