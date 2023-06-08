<script>
  import {
    NumberInput,
    OtherCalculatorsSection,
    ProgressDisplay,
    RangeSelectors,
    ResetButton,
    PresetButton,
    RangeGroupAddButton,
    RangeGroupRemoveButton,
    PresetExplanationModal,
  } from "./components";
  import { IconHelpCircle } from '@tabler/icons-svelte';
  import { keys, presets } from "./helpers/constants";
  import { have, need, isDisabled } from "./stores/base";
  import { presetOptions } from "./stores/presetOptions";

  let showPresetExplanationModal = false;
  const openModal = () => {
    navigator.vibrate?.(50);
    showPresetExplanationModal = true;
  };
</script>

<main>
  <table>
    <tr>
      <th />
      <th>Have</th>
      <th>Need</th>
    </tr>
    {#each keys as key, index}
      <tr>
        <th>{key.label}</th>
        <td>
          <NumberInput
            bind:value={$have[key.name]}
            disabled={$isDisabled[key.name]}
            tabindex={index + 10}
          />
        </td>
        <td>
          <NumberInput
            bind:value={$need[key.name]}
            disabled={$isDisabled[key.name]}
            tabindex={index + 20}
          />
        </td>
      </tr>
    {/each}

    <tr>
      <td>
        <ResetButton>Full Reset</ResetButton>
      </td>
      <td>
        <ResetButton type="have">Reset</ResetButton>
      </td>
      <td>
        <ResetButton type="need">Reset</ResetButton>
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
    <div class="heading">
      <h2>Presets</h2>
      <button class="icon" on:click={openModal}>
        <IconHelpCircle />
      </button>
    </div>

    <div class="heading">
      <h4>Character ascension</h4>
    </div>
    <RangeSelectors type="characterAscension" />
    <div class="button-group">
      {#each Object.keys(presets.characterAscension.drops) as drop}
        <PresetButton type="characterAscension" {drop} />
      {/each}
    </div>

    <div class="heading">
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
        <PresetButton type="talents" {drop} />
      {/each}
    </div>

    <div class="heading">
      <h4>5★ weapon ascension</h4>
    </div>
    <RangeSelectors type="weaponAscension5" />
    <div class="button-group">
      {#each Object.keys(presets.weaponAscension5.drops) as drop}
        <PresetButton type="weaponAscension5" {drop} />
      {/each}
    </div>

    <div class="heading">
      <h4>4★ weapon ascension</h4>
    </div>
    <RangeSelectors type="weaponAscension4" />
    <div class="button-group">
      {#each Object.keys(presets.weaponAscension4.drops) as drop}
        <PresetButton type="weaponAscension4" {drop} />
      {/each}
    </div>
  </section>

  <PresetExplanationModal bind:showModal={showPresetExplanationModal} />

  <OtherCalculatorsSection />
</main>
