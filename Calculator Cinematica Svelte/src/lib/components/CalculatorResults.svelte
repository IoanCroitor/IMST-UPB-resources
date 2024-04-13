<script lang="ts">
  import { onMount } from "svelte";
  import { calculateMechanism } from "./CalculatorWASM";
	import type { MechanismResults, MechanismValue } from "./types";

  export let k: number = 5;
  export let showMechanismResults: boolean = true;
  export let precision = 5;

  let phi1_deg: MechanismValue = 0;
  let phi2_deg_1: MechanismValue = 0;
  let phi2_deg_2: MechanismValue = 0;
  let phi3: MechanismValue = 0;
  let omega2: MechanismValue = 0;
  let omega3: MechanismValue = 0;
  let epsilon2: MechanismValue = 0;
  let epsilon3: MechanismValue = 0;
  let phi4: MechanismValue = 0;
  

  let mechanism: Promise<MechanismResults> | MechanismResults;

  async function setMechanismResults(k:number, precision: number) {
    mechanism = await calculateMechanism(k);
    phi1_deg = mechanism.phi1_deg.toPrecision(precision);
    phi2_deg_1 = mechanism.phi2_deg_1.toPrecision(precision);
    phi2_deg_2 = mechanism.phi2_deg_2.toPrecision(precision);
    phi3 = mechanism.phi3.toPrecision(precision);
    omega2 = mechanism.omega2.toPrecision(precision);
    omega3 = mechanism.omega3.toPrecision(precision);
    epsilon2 = mechanism.epsilon2.toPrecision(precision);
    epsilon3 = mechanism.epsilon3.toPrecision(precision);
    phi4 = mechanism.phi4.toPrecision(precision);
  }

  onMount(async() => {
    setMechanismResults(k, precision);

  });

$:  setMechanismResults(k, precision);

</script>

{#await mechanism}
    <p class="text-text text-2xl animate-pulse">Loading... Waiting for results</p>
{/await}

{#if showMechanismResults}
  
<div class="bg-terminal p-4 text-lg font-semibold font-mono">
  
  <p class="text-text  text-xl font-sans"> Rezultate pentru k=<span class="text-blue-200 ">{k}</span>:
  </p>

  <p>
    <span class="text-blue-200 ">Phi 1: </span><span class="text-white">{phi1_deg}</span><span class="text-blue-200 ">°</span>
  </p>
  <p>
    <span class="text-blue-200 ">Phi 2.1: </span><span class="text-white">{phi2_deg_1}</span><span class="text-blue-200 ">°</span>
  </p>
  <p>
    <span class="text-blue-200 ">Phi 2.2: </span><span class="text-white">{phi2_deg_1}</span><span class="text-blue-200 ">°</span>
  </p>
  
  <p class="pt-4">
    <span class="text-purple-200 ">Phi 3: </span><span class="text-white">{phi3}</span><span class="text-purple-200 ">°</span>
  </p>
  <p>
    <span class="text-purple-200 ">Omega2: </span><span class="text-white">{omega2}</span><span class="text-purple-200 "> rad/s</span>
  </p>
  <p>
    <span class="text-purple-200 ">Omega3: </span><span class="text-white">{omega3}</span><span class="text-purple-200 "> rad/s</span>
  </p>
  <p class="pt-4">
    <span class="text-orange-200 ">Epsilon2: </span><span class="text-white">{epsilon2}</span><span class="text-orange-200 "> rad/s</span>
  </p>
  <p>
    <span class="text-orange-200 ">Epsilon3: </span><span class="text-white">{epsilon3}</span><span class="text-orange-200 "> rad/s</span>
  </p>
  <p class="pt-4">
    <span class="text-green-200 ">Phi 4: </span><span class="text-white">{phi4}</span><span class="text-green-200 ">°</span>
  </p>
  
</div>

{/if}