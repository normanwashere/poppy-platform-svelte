<script>
  import { onMount } from 'svelte';
  import { cases } from '$lib/data/cases';

  let role = '';
  let search = '';
  let sortBy = 'date';
  let currentTab = '';

  const officerTabs = ['New', 'Screening', 'Returned', 'Approved', 'Completed'];
  const headTabs = ['For Approval', 'Returned', 'Approved', 'Budget'];

  onMount(() => {
    role = typeof localStorage !== 'undefined' ? localStorage.getItem('role') || '' : '';
    currentTab = role === 'head' ? headTabs[0] : officerTabs[0];
  });

  $: tabs = role === 'head' ? headTabs : officerTabs;
  $: counts = tabs.reduce((acc, t) => {
    acc[t] = cases.filter((c) => c.status === t).length;
    return acc;
  }, {});

  $: list = cases
    .filter((c) => c.status === currentTab)
    .filter((c) =>
      c.beneficiary.toLowerCase().includes(search.toLowerCase()) ||
      c.controlNo.toLowerCase().includes(search.toLowerCase())
    );

  $: list = sortBy === 'date'
    ? list.sort((a, b) => (a.requestDate < b.requestDate ? 1 : -1))
    : list.sort((a, b) => a.beneficiary.localeCompare(b.beneficiary));
</script>

{#if role === ''}
  <p>No role selected.</p>
{:else}
  <div class="search">
    <input placeholder="Search" bind:value={search} />
    <select bind:value={sortBy}>
      <option value="date">Request Date</option>
      <option value="name">Name</option>
    </select>
  </div>

  <div class="tabs">
    {#each tabs as tab}
      <button class:active={currentTab === tab} on:click={() => (currentTab = tab)}>
        {tab} <span class="count">{counts[tab] || 0}</span>
      </button>
    {/each}
  </div>

  {#if currentTab === 'Budget'}
    <p>Budget overview coming soon.</p>
  {:else}
    {#each list as c}
      <div class="card" role="button" tabindex="0" on:click={() => alert('Case detail coming soon')}>
        <strong>{c.beneficiary}</strong> – {c.controlNo}<br />
        <span>{c.type} | {c.municipality}</span><br />
        <span>{c.requestDate}</span><br />
        {#if c.status === 'Returned'}
          <em>Reason: {c.reason}</em>
        {/if}
      </div>
    {/each}
    {#if list.length === 0}
      <p>No cases found.</p>
    {/if}
  {/if}
{/if}

<style>
  .search { margin-bottom: 1rem; display: flex; gap: 0.5rem; }
  .tabs { margin-bottom: 1rem; }
  .tabs button { margin-right: 0.5rem; }
  .tabs .count { background: #ccc; border-radius: 1rem; padding: 0 0.5rem; }
  .tabs .active { font-weight: bold; }
  .card { border: 1px solid #ddd; padding: 0.5rem; margin-bottom: 0.5rem; cursor: pointer; }
</style>
