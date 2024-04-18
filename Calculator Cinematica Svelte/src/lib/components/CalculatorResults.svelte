<script lang="ts">
  import type { MechanismResults, MechanismValue } from "./types";
  ////////////////////////////////////////////////////////
  // TEMPORARY UNTIL VITE FIXES ES6 EMSCRIPTEN EXPORTS //
  ///////////////////////////////////////////////////////
  // TODO: Refactor to use wasm module
  //import { calculateMechanism } from "./CalculatorWASM";
  import { calculateMechanism } from "./CalculatorTypescript";

  import { onMount } from "svelte";

  export let k: number = 5;
  export let showMechanismResults: boolean = true;
  export let precision = 7;

  // Mechanism results FOR THE WASM buid because it doen't like getting data diectly from an exported object
  let phi1_deg: MechanismValue = 0;
  let phi2_deg_1: MechanismValue = 0;
  let phi2_deg_2: MechanismValue = 0;
  let phi3: MechanismValue = 0;
  let omega2: MechanismValue = 0;
  let omega3: MechanismValue = 0;
  let epsilon2: MechanismValue = 0;
  let epsilon3: MechanismValue = 0;
  let phi4: MechanismValue = 0;
  let omega4: MechanismValue = 0;
  let VF: MechanismValue = 0;
  let epsilon4: MechanismValue = 0;
  let AF: MechanismValue = 0;
  let xF: MechanismValue = 0;
  let yF2: MechanismValue = 0;

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
    omega4 = mechanism.omega4.toPrecision(precision);
    VF = mechanism.VF.toPrecision(precision);
    epsilon4 = mechanism.epsilon4.toPrecision(precision);
    AF = mechanism.AF.toPrecision(precision);
    xF = mechanism.xF.toPrecision(precision);
    yF2 = mechanism.yF2.toPrecision(precision);
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
    <span class="text-gray-200">Phi 2.2: </span><span class="text-gray-200">{phi2_deg_2}</span><span class="text-gray-200 ">°</span>
  </p>
  
  <p class="pt-4">
    <span class="text-purple-200 ">Phi 3: </span><span class="text-white">{phi3}</span><span class="text-purple-200 ">°</span>
  </p>
  <p>
    <span class="text-purple-200 ">Omega2: </span><span class="text-white">{omega2} </span><span class="text-purple-200 ">rad/s</span>
  </p>
  <p>
    <span class="text-purple-200 ">Omega3: </span><span class="text-white">{omega3} </span><span class="text-purple-200 ">rad/s</span>
  </p>
  <p class="pt-4">
    <span class="text-orange-200 ">Epsilon2: </span><span class="text-white">{epsilon2} </span><span class="text-orange-200 ">rad/s²</span>
  </p>
  <p>
    <span class="text-orange-200 ">Epsilon3: </span><span class="text-white">{epsilon3} </span><span class="text-orange-200 ">rad/s²</span>
  </p>
  <p class="pt-4">
    <span class="text-green-200 ">Phi 4: </span><span class="text-white">{phi4}</span><span class="text-green-200 ">°</span>
  </p>

  <p>
    <span class="text-sky-200 ">xF: </span><span class="text-sky-100">{xF} </span>
  </p>
  <p>
    <span class="text-sky-200 ">yF: </span><span class="text-sky-100">{yF2} </span>
  </p>
  <p>
    <span class="text-sky-200 ">Omega 4: </span><span class="text-sky-100">{omega4} </span><span class="text-sky-200 ">rad/s</span>
  </p>
  <p>
    <span class="text-sky-200 ">Viteza liniara VF: </span><span class="text-sky-100">{VF} </span><span class="text-sky-200 ">m/s</span>
  </p>
  <p>
    <span class="text-pink-200 ">Epsilon4: </span><span class="text-pink-100">{epsilon4} </span><span class="text-pink-200 ">rad/s²</span>
  </p>
  <p>
    <span class="text-pink-200 ">Acceleratia liniara AF: </span><span class="text-pink-100">{AF} </span><span class="text-pink-200 ">m/s²</span>
  </p>
</div>

{/if}