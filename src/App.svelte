<script>
  export let mode; // This will be either 'cool' or 'boring'
  import CoolModeMain from "./lib/coolMode/CoolModeMain.svelte";
  import BoringModeMain from "./lib/boringMode/BoringModeMain.svelte";

  // You can use this prop to conditionally render different content
  $: isCoolMode = mode === 'cool';
</script>

{#if isCoolMode}
  <!-- Your interactive content -->
  <CoolModeMain />
{:else}
  <!-- Your professional static content -->
  <BoringModeMain />
{/if}

