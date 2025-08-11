<script>
  import { onMount } from 'svelte';
  let role = '';
  onMount(() => {
    role = typeof localStorage !== 'undefined' ? localStorage.getItem('role') || '' : '';
  });
</script>

<h2>Profile</h2>
<p>Role: {role || 'Unknown'}</p>
