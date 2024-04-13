<script lang="ts" >
  import CodeRenderer from "$lib/components/CodeRenderer.svelte";
  import { onMount } from "svelte";
  
  async function loadGithubCode(url: string): Promise<string> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      console.log(data);
      return data;
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      // Check if error is an instance of Error and thus has a message property
      if (error instanceof Error) {
        throw new Error("There was a problem while fetching the C++ code from our GitHub repository: " + error.message);
      } else {
        // If it's not an Error, handle or throw it differently
        throw new Error("An unknown error occurred");
      }
    }
  }

  // URL of the C++ file
  const cppUrl: string = "https://raw.githubusercontent.com/IoanCroitor/IMST-UPB-resources/main/Calculator%20Cinematica%20C%2B%2B/main.cpp";


  let code: Promise<string>;
  onMount(() => {
    // code = loadGithubCode(cppUrl);
    console.log(code);
  })



</script>

{#await code}
  <p>Loading...</p>
{:then code}
  <CodeRenderer {code}/>
{:catch error}
  <p>There's a problem:</p>
  <p>{(error instanceof Error) ? error.message : "An unknown error occurred"}</p>
{/await}