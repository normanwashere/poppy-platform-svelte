<script>
  import { onMount } from 'svelte';
  let role = '';
  let profile = {};
  onMount(() => {
    role = typeof localStorage !== 'undefined' ? localStorage.getItem('role') || '' : '';
    if (role === 'head') {
      profile = { name: 'Anita Morales', position: 'PSWDO Head', email: 'head@example.com' };
    } else if (role === 'officer') {
      profile = { name: 'Marco Reyes', position: 'Case Officer', email: 'officer@example.com' };
    }
  });
</script>

<h2>Profile</h2>
{#if role}
  <p>Name: {profile.name}</p>
  <p>Position: {profile.position}</p>
  <p>Email: {profile.email}</p>
{:else}
  <p>Unknown role.</p>
{/if}
