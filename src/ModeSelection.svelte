<script>
    import App from './App.svelte'
    import CoolModeHomeButton from './lib/coolMode/CoolModeHomeButton.svelte';

    let selectedMode = null;

    function selectMode(mode) {
      selectedMode = mode;
    }
  </script>

  <main>
    {#if !selectedMode}
      <div class="mode-selection">
        <h1>Choose Your Experience</h1>
        <div class="buttons">

          <button on:click={() => selectMode('cool')}>
            <CoolModeHomeButton />
          </button>

          <button class="boring" on:click={() => selectMode('boring')}>
            Professional Mode
            <span>(Better for Mobile Devices)</span>
          </button>
        </div>
      </div>
    {:else}
      <App mode={selectedMode} />
    {/if}
  </main>

  <style>
    .mode-selection {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: #f5f5f5;
    }

    h1 {
      margin-bottom: 2rem;
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
      font-size: 0.8em;
      margin-top: 0.5rem;
      opacity: 0.8;
    }

    .cool {
      background: #6366f1;
      color: white;
    }

    .boring {
      background: #64748b;
      color: white;
    }
  </style>