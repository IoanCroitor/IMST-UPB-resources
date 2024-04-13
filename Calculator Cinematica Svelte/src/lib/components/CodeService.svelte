<script lang="ts">
  import CodeRenderer from './CodeRenderer.svelte';
  export let code:Promise<string>;
</script>

{#await code}
  <p class="text-text">Loading...</p>
{:then code}
  <CodeRenderer {code}/>
{:catch error}
  <p class="text-text">There's a problem:</p>
  <p>{(error instanceof Error) ? error.message : "An unknown error occurred"}</p>
{/await}