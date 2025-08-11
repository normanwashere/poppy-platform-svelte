<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let role = '';
  onMount(() => {
    role = typeof localStorage !== 'undefined' ? localStorage.getItem('role') || '' : '';
    if (!role) goto('/login');
  });

  $: showReports = role === 'head';
</script>

<slot />

<nav class="bottom-nav">
  <a href="/staff/dashboard">Dashboard</a>
  {#if showReports}
    <a href="/staff/reports">Reports</a>
  {/if}
  <a href="/staff/profile">Profile</a>
</nav>
