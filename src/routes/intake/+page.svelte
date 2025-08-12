<script>
  import { goto } from '$app/navigation';
  import { documentChecklist } from '$lib/data/documentChecklist';

  let step = 0;
  let form = {
    personal: {
      fullName: '',
      sex: '',
      birthdate: '',
      civilStatus: '',
      placeOfBirth: '',
      education: '',
      philId: '',
      idNumber: '',
      contact: '',
      email: '',
      prefContact: ''
    },
    rep: {
      has: false,
      name: '',
      relationship: '',
      contact: '',
      idType: '',
      idNo: ''
    },
    address: {
      municipality: '',
      barangay: '',
      street: '',
      household: []
    },
    caseDetails: {
      clientCategory: [],
      is4Ps: false,
      referringParty: '',
      cluster: '',
      background: '',
      assistanceType: 'Medical'
    },
    documents: {},
    consent: false
  };

  $: docs = documentChecklist[form.caseDetails.assistanceType] || [];

  function addMember() {
    form.address.household.push({ name: '', relation: '', age: '', income: '' });
  }

  function removeMember(i) {
    form.address.household.splice(i, 1);
  }

  function next() {
    if (step < 4) step++;
  }

  function back() {
    if (step > 0) step--;
  }

  function cancel() {
    goto('/');
  }

  function submit() {
    if (!form.consent) return;
    alert('Submitted! Control #: AICS-2024-999');
    goto('/');
  }
</script>

<h2>Intake Form</h2>

{#if step === 0}
  <h3>Personal</h3>
  <label>Full Name <input bind:value={form.personal.fullName} required /></label>
  <label>Sex
    <select bind:value={form.personal.sex}>
      <option value="">Select</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </label>
  <label>Birthdate <input type="date" bind:value={form.personal.birthdate} /></label>
  <label>Contact # <input bind:value={form.personal.contact} /></label>
  <label>Email <input type="email" bind:value={form.personal.email} /></label>
  <label>Preferred contact channel <input bind:value={form.personal.prefContact} /></label>
  <label>
    <input type="checkbox" bind:checked={form.rep.has} /> Authorized Representative?
  </label>
  {#if form.rep.has}
    <div class="rep">
      <label>Name <input bind:value={form.rep.name} /></label>
      <label>Relationship <input bind:value={form.rep.relationship} /></label>
      <label>Contact # <input bind:value={form.rep.contact} /></label>
    </div>
  {/if}
{/if}

{#if step === 1}
  <h3>Address & Family</h3>
  <label>Municipality <input bind:value={form.address.municipality} /></label>
  <label>Barangay <input bind:value={form.address.barangay} /></label>
  <label>House/Street <input bind:value={form.address.street} /></label>
  <h4>Household Members</h4>
  {#each form.address.household as member, i}
    <div class="member">
      <input placeholder="Name" bind:value={member.name} />
      <input placeholder="Relation" bind:value={member.relation} />
      <input placeholder="Age" bind:value={member.age} />
      <input placeholder="Income Source" bind:value={member.income} />
      <button type="button" on:click={() => removeMember(i)}>Remove</button>
    </div>
  {/each}
  <button type="button" on:click={addMember}>Add Member</button>
{/if}

{#if step === 2}
  <h3>Case Details</h3>
  <label>Client Category <input bind:value={form.caseDetails.clientCategory} /></label>
  <label>
    4Ps Member?
    <span title="Pantawid Pamilyang Pilipino Program">ⓘ</span>
    <select bind:value={form.caseDetails.is4Ps}>
      <option value={false}>No</option>
      <option value={true}>Yes</option>
    </select>
  </label>
  <label>Referring Party <input bind:value={form.caseDetails.referringParty} /></label>
  <label>Cluster <input bind:value={form.caseDetails.cluster} /></label>
  <label>Brief Background <textarea bind:value={form.caseDetails.background}></textarea></label>
  <label>Assistance Type
    <select bind:value={form.caseDetails.assistanceType}>
      <option>Medical</option>
      <option>Burial</option>
      <option>Education</option>
    </select>
  </label>
{/if}

{#if step === 3}
  <h3>Documents</h3>
  {#each docs as doc}
    <div>
      <label>{doc.label} {doc.required ? '(required)' : ''}</label>
      <input type="file" on:change={(e) => form.documents[doc.key] = e.target.files[0]} required={doc.required} />
    </div>
  {/each}
{/if}

{#if step === 4}
  <h3>Review & Consent</h3>
  <pre>{JSON.stringify(form, null, 2)}</pre>
  <label>
    <input type="checkbox" bind:checked={form.consent} /> I agree to the privacy notice
  </label>
{/if}

<div class="nav">
  {#if step > 0}
    <button type="button" on:click={back}>Back</button>
  {/if}
  {#if step < 4}
    <button type="button" on:click={next}>Next</button>
  {:else}
    <button type="button" on:click={submit} disabled={!form.consent}>Submit</button>
  {/if}
  <button type="button" on:click={cancel}>Cancel</button>
</div>

<style>
  h3 { margin-top: 1rem; }
  label { display: block; margin: 0.5rem 0; }
  .nav { margin-top: 1rem; display: flex; gap: 0.5rem; }
  .member { margin-bottom: 0.5rem; }
  .rep { margin-left: 1rem; }
</style>
