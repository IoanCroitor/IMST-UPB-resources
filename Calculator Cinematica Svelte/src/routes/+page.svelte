<script lang="ts"> 

	import CalculatorResults from "$lib/components/CalculatorResults.svelte";
	import CodeWrapper from "$lib/components/CodeWrapper.svelte";

	// let showMechanismResults:boolean = false;
	let k:number =0 ;
	let precision: number = 6;

</script>


<h1 class=" bg-gradient-to-br from-fuchsia-200 to-utext text-transparent bg-clip-text block text-3xl xl:font-4xl font-bold">Calculator Cinematica</h1>

<article class=" text-lg text-text pb-4 pt-6">
	Acest program calculează unghiurile, vitezele și accelerațiile unui mecanism dat, folosind o valoare specifică introdusă de utilizator. Prin aplicarea ecuațiilor matematice și principiilor fizicii, transformă valoarea introdusă într-o serie de rezultate precise care descriu comportamentul mecanismului în spațiu.
</article>

<div class="bg-terminal/40 rounded-t-xl px-4 pt-4 pb-6 ">
	<div class="w-full flex flex-row items-center justify-between">
		<h2 class="text-xl text-utext">Valoarea lui k:</h2>
		<input bind:value={k} type="number" min="0" class="bg-text/10 backdrop-blur-lg text-text w-1/2 rounded-xl p-2 focus:outline-accent  border-none outline-none" />
	</div>
	<div class="w-full flex flex-row items-center justify-between pt-4">
		<h2 class="text-xl text-utext">Precizie calcul:</h2>
		<input bind:value={precision} max="15" min="0" type="number" class=" bg-text/10 backdrop-blur-lg text-text w-1/2 rounded-xl p-2 focus:outline-accent border-none outline-none" />
	</div>

</div>


<div class="rounded-b-xl overflow-hidden will-change-contents">
	  <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-primary"></div>
	<CalculatorResults {k} {precision}/>
</div>



<!-- <div class="flex flex-row pt-12">

	<div class="w-40 h-40 bg-primary"></div>
	<div class="w-40 h-40 bg-secondary"></div>

	<div class="w-40 h-40 bg-accent"></div>
	
</div> -->
<div class="my-6">
	<h2 class="text-text text-lg py-1">Codul sursa ce sta la baza calculatorului</h2>
	<CodeWrapper/>
</div>
