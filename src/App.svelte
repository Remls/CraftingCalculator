<script>
  import NumberInput from "./components/NumberInput.svelte";
  import OtherCalculatorsSection from "./components/OtherCalculatorsSection.svelte";
  import ProgressDisplay from "./components/ProgressDisplay.svelte";
  import RangeSelectors from "./components/RangeSelectors.svelte";
  import ResetButton from "./components/ResetButton.svelte";
  import PresetButton from "./components/PresetButton.svelte";
  import RangeGroupRemoveButton from "./components/RangeGroupRemoveButton.svelte";
  import RangeGroupAddButton from "./components/RangeGroupAddButton.svelte";
  import { keys, presets } from "./helpers/constants";

  import { presetOptions } from "./stores/presetOptions";
  // Initiate preset options' drops
  for (let type in presets) {
    presetOptions.updateDrops(type);
  }

  import { have, need, isDisabled } from "./stores/base";

  const loadPresetFromSelection = (type, drop) => {
    const selection = $presetOptions[type].drops[drop];
    isDisabled.set({
      five: selection.five === null,
      four: selection.four === null,
      three: selection.three === null,
      two: selection.two === null,
      one: selection.one === null,
    });
    need.set({ ...selection });
    ["five", "four", "three", "two", "one"].forEach((key) => {
      if ($isDisabled[key]) {
        $have[key] = 0;
      }
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetHave = () => {
    have.set({
      five: null,
      four: null,
      three: null,
      two: null,
      one: null,
    });
  };
  const resetNeed = () => {
    need.set({
      five: null,
      four: null,
      three: null,
      two: null,
      one: null,
    });
  };
  const resetAll = () => {
    localStorage.clear();
    resetHave();
    resetNeed();
    isDisabled.set({
      five: false,
      four: false,
      three: false,
      two: false,
      one: false,
    });
  };
</script>

<main>
  <table>
    <tr>
      <th />
      <th>Have</th>
      <th>Need</th>
    </tr>
    {#each keys as key}
      <tr>
        <th>{key.label}</th>
        <td>
          <NumberInput
            bind:value={$have[key.name]}
            disabled={$isDisabled[key.name]}
          />
        </td>
        <td>
          <NumberInput
            bind:value={$need[key.name]}
            disabled={$isDisabled[key.name]}
          />
        </td>
      </tr>
    {/each}

    <tr>
      <td>
        <ResetButton on:click={resetAll}>Full Reset</ResetButton>
      </td>
      <td>
        <ResetButton on:click={resetHave}>Reset</ResetButton>
      </td>
      <td>
        <ResetButton on:click={resetNeed}>Reset</ResetButton>
      </td>
    </tr>

    <tr>
      <th>Progress</th>
      <td colspan="2">
        <ProgressDisplay />
      </td>
    </tr>
  </table>

  <section class="presets-section">
    <h2>Presets</h2>

    <div class="explanation">
      <p>
        Use the sliders to select From and To, then click one of the buttons to
        apply the preset. Applying a preset will overwrite any existing value in
        the Need column.
      </p>
      <p>
        If a preset is selected, the simplified value (under the progress bar)
        will be calculated based only on the available rarities of your selected
        preset (with the lowest rarity taking a value of 1, then 3, then 9,
        etc.). Also, input boxes for rarities that are impossible to obtain for
        the selected preset will be disabled.
      </p>
      <p>
        To clear the preset and re-enable all inputs, click the "Full Reset"
        button.
      </p>
    </div>

    <h4>Character ascension</h4>
    <RangeSelectors type="characterAscension" />
    <div class="button-group">
      {#each Object.keys(presets.characterAscension.drops) as drop}
        <PresetButton
          type="characterAscension"
          {drop}
          on:click={() => loadPresetFromSelection("characterAscension", drop)}
        />
      {/each}
    </div>

    <div class="talents-heading">
      <h4>Talents</h4>
      <RangeGroupAddButton type="talents" />
    </div>
    {#each $presetOptions.talents.rangeGroups as group, index (group.id)}
      <RangeSelectors type="talents" {index}>
        <svelte:fragment let:from let:to>
          Lv. {from} to Lv. {to}
        </svelte:fragment>
        <div slot="after">
          <RangeGroupRemoveButton type="talents" {index} />
        </div>
      </RangeSelectors>
    {/each}
    <div class="button-group">
      {#each Object.keys(presets.talents.drops) as drop}
        <PresetButton
          type="talents"
          {drop}
          on:click={() => loadPresetFromSelection("talents", drop)}
        />
      {/each}
    </div>

    <h4>5★ weapon ascension</h4>
    <RangeSelectors type="weaponAscension5" />
    <div class="button-group">
      {#each Object.keys(presets.weaponAscension5.drops) as drop}
        <PresetButton
          type="weaponAscension5"
          {drop}
          on:click={() => loadPresetFromSelection("weaponAscension5", drop)}
        />
      {/each}
    </div>

    <h4>4★ weapon ascension</h4>
    <RangeSelectors type="weaponAscension4" />
    <div class="button-group">
      {#each Object.keys(presets.weaponAscension4.drops) as drop}
        <PresetButton
          type="weaponAscension4"
          {drop}
          on:click={() => loadPresetFromSelection("weaponAscension4", drop)}
        />
      {/each}
    </div>
  </section>

  <OtherCalculatorsSection />
</main>
