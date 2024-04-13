<script>
  import Highlight from "svelte-highlight";
  import cpp from "svelte-highlight/languages/cpp";
	import { tokyoNightDark } from "svelte-highlight/styles";
  
  export let code="";
</script>


<svelte:head>
  {@html tokyoNightDark}
</svelte:head>

<Highlight language={cpp} {code} />