<script>
	import MathJax from '../MathJax.svelte';
	
	let math = '$$x^3$$';
</script>

<div>
	<input bind:value={math}>
</div>
{#key math}
	<MathJax {math}></MathJax>
{/key}