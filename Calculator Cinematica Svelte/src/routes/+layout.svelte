<script>
  import '../app.css';
	import Footer from './footer.svelte';
</script>

<div class="max-w-2xl mx-auto px-4 pt-12">
  <slot />
</div>
<footer>
  <Footer/>
</footer>