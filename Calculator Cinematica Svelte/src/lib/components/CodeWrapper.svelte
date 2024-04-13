<script lang="ts">

import CodeService from '$lib/components/CodeService.svelte';
import { loadGithubCode } from './loadGithubCode';

const codeWASM =loadGithubCode("https://raw.githubusercontent.com/IoanCroitor/IMST-UPB-resources/main/Calculator%20Cinematica%20C%2B%2B/main.cpp");
const codeCPP =loadGithubCode("");
const codeCppPreview= "https://github.com/IoanCroitor/IMST-UPB-resources/blob/main/Calculator%20Cinematica%20C%2B%2B/main.cpp";
//TODO: Change the code
const codeWASMPreview="https://github.com/IoanCroitor/IMST-UPB-resources/blob/main/Calculator%20Cinematica%20WASM/main.wasm";
let githubLink:string= codeCppPreview;


let styleBTN1 = "bg-opacity-90 backdrop-blur-lg text-gray-800";
  let styleBTN2 = "bg-opacity-10 text-gray-500";
  let showCodeFrom= "C++";

function handleClickBTN1() {
  styleBTN1 = "bg-opacity-90 backdrop-blur-lg text-gray-800";
  styleBTN2 = "bg-opacity-10 text-gray-500";
  showCodeFrom = "C++";
  githubLink = codeCppPreview;


}
function handleClickBTN2() {
  styleBTN2 = "bg-opacity-90 backdrop-blur-lg text-gray-800";
  styleBTN1 = "bg-opacity-10 text-gray-500";
  showCodeFrom = "WASM";
  githubLink = codeWASMPreview;
}

</script>


<div class="rounded-xl overflow-hidden bg-black/20 backdrop-blur-lg will-change-contents">
  <div class="flex flex-row h-9  my-2 px-4">
    <div class="bg-slate-800 rounded-xl overflow-hidden flex items-center">
      <button on:click={handleClickBTN1} class={`bg-primary h-full flex items-center px-2 font-semibold ${styleBTN1}`}>C++</button>
      <button on:click={handleClickBTN2} class={`bg-primary h-full flex items-center px-2 font-semibold ${styleBTN2}`}>WASM Ready</button>
    </div>
    <a href={githubLink} target="_blank" class="text-text my-auto font-semibold ml-auto">Get it on Github!</a>
  </div>
  <CodeService code={showCodeFrom === "C++" ? codeCPP : codeWASM}/>
</div>


