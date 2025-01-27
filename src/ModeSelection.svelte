<script>
    import App from './App.svelte'
    import CoolModeHomeButton from './lib/coolMode/CoolModeHomeButton.svelte';
    import BoringModeHomeButton from './lib/boringMode/BoringModeHomeButton.svelte';

    let selectedMode = null;

    function selectMode(mode) {
      selectedMode = mode;
    }
</script>

<main>
    {#if !selectedMode}
      <div class="mode-selection">
        <h1>Choose your<br>
        adventure</h1>
        <div class="buttons">

          <button on:click={() => selectMode('cool')}>
            <h2>Cool Mode</h2>
            <span>(Best for PC)</span>
            <CoolModeHomeButton />
          </button>

          <button class="boring" on:click={() => selectMode('boring')}>
            <h2>Boring Mode</h2>
            <span>(Best for Mobile)</span>
            <BoringModeHomeButton />
          </button>
        </div>
      </div>
    {:else}
      <App mode={selectedMode} />
    {/if}
</main>

<style>

    .mode-selection {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #f5f5f5;
    }

    h1 {
      font-size: 8vw;
      color: #333;
    }

    h2 {
      font-size: 5vw;
      color: #333;
    }

    /* Media query for desktop dimensions */
    @media (min-width: 768px) {
      h1 {
        font-size: 48px;
      }

      h2 {
        font-size: 32px;
      }
    }

    .buttons {
      display: flex;
    }

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.2s, box-shadow 0.2s;
      border-radius: 8px;
      border: 1px solid transparent;
      //padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #f5f5f5;
      cursor: pointer;
      transition: border-color 0.25s;
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    button span {
      font-size: 1em;
      opacity: 0.8;
      color: rgb(55, 110, 221);
    }

    .cool {
      background: #f5f5f5;
      color: white;
    }

    .boring {
      background: #f5f5f5;
      color: white;
    }
</style>