

<script >
  
// @ts-nocheck
  import CodeService from '$lib/components/CodeService.svelte';
  
  import { calculateMechanism } from '$lib/calculator';

  function strip(number) {
    return (parseFloat(number).toPrecision(12));
}
  console.log(strip(calculateMechanism(5)))
</script>


<h1 class="text-red-500">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="w-40 h-40 bg-primary"></div>
<div class="w-40 h-40 bg-secondary"></div>
<div class="w-40 h-40 bg-tertiary"></div>
<div class="w-40 h-40 bg-accent"></div>

<div class="rounded-xl overflow-hidden">
  <div class="w-full h-42 bg-foreground hover:bg-tertiary transition-all p-4 group flex flex-row">
    <h2 class="text-tertiary text-xl group-hover:text-foreground transition-all my-auto">The current c++ codebase for this project:</h2>
    <a href="https://github.com/IoanCroitor/IMST-UPB-resources/blob/main/Calculator%20Cinematica%20C%2B%2B/main.cpp"
       class="bg-primary hover:bg-secondary hover:rounded-xl transition-all ml-auto p-2 rounded-full font-bold text-foreground my-auto"
       target="_blank">View it on GitHub!</a>
  </div>
  <CodeService />
</div>
<button on:click={runCalculation}>Run calculation</button>