<script>
  import { goto } from '$app/navigation';
  let ref = '';
  let last = '';
  let result = null;

  function check() {
    // demo static status
    result = {
      steps: ['Submitted', 'Screening', 'For Approval', 'Approved', 'Completed'],
      current: 2,
      reason: 'Missing ID'
    };
  }
</script>

<h2>Status Check</h2>
<label>Reference # <input bind:value={ref} /></label>
<label>Last Name <input bind:value={last} /></label>
<button on:click={check}>Check</button>

{#if result}
  <ul>
    {#each result.steps as s, i}
      <li>{s}{i === result.current ? ' (current)' : ''}</li>
    {/each}
  </ul>
  {#if result.reason}
    <p>Return reason: {result.reason}</p>
  {/if}
{/if}

<button on:click={() => goto('/')}>Back to Home</button>
