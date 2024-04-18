<!-- Big thanks to https://svelte.dev/repl/218430bdd2d541f3bf8c6cef51eec89a?version=3.46.4 for the code -->

<script>
// @ts-nocheck

	import { createEventDispatcher, onMount } from 'svelte';

	export let math;
	let mathContent ='';
	const dispatch = createEventDispatcher();
	
	onMount(() => {
		let script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
    document.head.append(script);
		
		script.onload = () => {
      MathJax = {
        tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
        svg: {fontCache: 'global'}
      };
		};
		console.log("MathJax loaded");
    script.onerror = () => {
      console.log("MathJax failed to load");
    };
	});
</script>

<p class="text-text">
	{math}
</p>
