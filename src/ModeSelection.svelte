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
            <span>(For PC)</span>
            <CoolModeHomeButton />
          </button>

          <button class="boring" on:click={() => selectMode('boring')}>
            <h2>Boring Mode</h2>
            <span>(For Mobile)</span>
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
      color: #333;
    }

    h2 {
      color: #333;
    }

    .buttons {
      display: flex;
      gap: 2rem;
    }

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem 2.5rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    button span {
      font-size: 1em;
      opacity: 0.8;
      color: rgb(186, 87, 87);
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