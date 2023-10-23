<script lang="ts"> 
  import logoPng from "./assets/logo.png";
  import {
    NumberInput,
    GameSelectorSection,
    OtherCalculatorsSection,
    ProgressDisplay,
    RangeGroup,
    ResetButton,
    PresetButton,
    RangeGroupAddButton,
    RangeGroupRemoveButton,
    PresetExplanationModal,
  } from "./components";
  import { IconHelpCircle } from "@tabler/icons-svelte";
  import { keys, presets } from "./helpers/constants";
  import { parseQueryParams } from "./helpers/functions";
  import { have, need, isDisabled, resetAllSyncedStores } from "./stores/base";
  import { presetOptions } from "./stores/presetOptions";
  import { type PresetType, type DropType } from "./types";
  import SimplifiedValuesExplanationModal from "./components/SimplifiedValuesExplanationModal.svelte";
  import { slide } from "svelte/transition";

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('have') || urlParams.has('need')) {
    resetAllSyncedStores();
    parseQueryParams('have');
    parseQueryParams('need');
    // Remove query params from URL
    history.replaceState(null, '', window.location.pathname);
  }

  let showPresetExplanationModal = false;
  let showSimplifiedValuesExplanationModal = false;
  let currentlySelectedGame = null;
  const openModal = (modalName: string) => {
    return () => {
      navigator.vibrate?.(50);
      switch (modalName) {
        case "preset":
          showPresetExplanationModal = true;
          break;
        case "simplifiedValues":
          showSimplifiedValuesExplanationModal = true;
          break;
      }
    };
  };
  const getDrops = (type: PresetType) => {
    return Object.keys(presets[type].drops) as DropType[];
  };
</script>

<main>
  <div class="main-heading">
    <img src={logoPng} alt="Logo" />
    <div>
      <h1>Crafting Calculator</h1>
      <p class="by-line">by Remls</p>
    </div>
  </div>
  <table>
    <tr>
      <th>Rarity</th>
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
      <td colspan="3">
        <ProgressDisplay on:help={openModal("simplifiedValues")} />
      </td>
    </tr>
  </table>

  <section class="presets-section">
    <div class="heading">
      <h2>Presets</h2>
      <button class="icon" on:click={openModal("preset")}>
        <IconHelpCircle />
      </button>
    </div>

    <GameSelectorSection bind:currentlySelectedGame />

    {#if currentlySelectedGame === "Genshin Impact"}
    <div transition:slide>
      <div class="heading">
        <h4>Character ascension</h4>
      </div>
      <RangeGroup type="characterAscension" />
      <div class="button-group">
        {#each getDrops("characterAscension") as drop}
          <PresetButton type="characterAscension" {drop} />
        {/each}
      </div>
  
      <div class="heading">
        <h4>Talents</h4>
        <RangeGroupAddButton type="talents" />
      </div>
      {#each $presetOptions.talents.rangeGroups as group, index (group.id)}
        <RangeGroup type="talents" {index}>
          <svelte:fragment let:from let:to>
            Lv. {from} to Lv. {to}
          </svelte:fragment>
          <div slot="after">
            <RangeGroupRemoveButton type="talents" {index} />
          </div>
        </RangeGroup>
      {/each}
      <div class="button-group">
        {#each getDrops("talents") as drop}
          <PresetButton type="talents" {drop} />
        {/each}
      </div>
  
      <div class="heading">
        <h4>5★ weapon ascension</h4>
      </div>
      <RangeGroup type="weaponAscension5" />
      <div class="button-group">
        {#each getDrops("weaponAscension5") as drop}
          <PresetButton type="weaponAscension5" {drop} />
        {/each}
      </div>
  
      <div class="heading">
        <h4>4★ weapon ascension</h4>
      </div>
      <RangeGroup type="weaponAscension4" />
      <div class="button-group">
        {#each getDrops("weaponAscension4") as drop}
          <PresetButton type="weaponAscension4" {drop} />
        {/each}
      </div>
    </div>
    {:else if currentlySelectedGame === "Honkai: Star Rail"}
    <div transition:slide>
      <div class="heading">
        <h4>5★ character ascension</h4>
      </div>
      <RangeGroup type="hsrCharacterAscension5" />
      <div class="button-group">
        {#each getDrops("hsrCharacterAscension5") as drop}
          <PresetButton type="hsrCharacterAscension5" {drop} />
        {/each}
      </div>

      <div class="heading">
        <h4>4★ character ascension</h4>
      </div>
      <RangeGroup type="hsrCharacterAscension4" />
      <div class="button-group">
        {#each getDrops("hsrCharacterAscension4") as drop}
          <PresetButton type="hsrCharacterAscension4" {drop} />
        {/each}
      </div>

      <div class="heading">
        <h4>5★ character traces</h4>
      </div>
      <div class="sub heading">
        <h5>Basic ATK trace</h5>
      </div>
      <RangeGroup type="hsrBasicAtkTrace5">
        <svelte:fragment let:from let:to>
          Lv. {from} to Lv. {to}
        </svelte:fragment>
      </RangeGroup>
      <div class="button-group">
        {#each getDrops("hsrBasicAtkTrace5") as drop}
          <PresetButton type="hsrBasicAtkTrace5" {drop} />
        {/each}
      </div>

      <div class="sub heading">
        <h5>Other traces</h5>
        <RangeGroupAddButton type="hsrOtherTraces5" maxRangeGroupLength={4} />
      </div>
      {#each $presetOptions.hsrOtherTraces5.rangeGroups as group, index (group.id)}
        <RangeGroup type="hsrOtherTraces5" {index}>
          <svelte:fragment let:from let:to>
            Lv. {from} to Lv. {to}
          </svelte:fragment>
          <div slot="after">
            <RangeGroupRemoveButton type="hsrOtherTraces5" {index} />
          </div>
        </RangeGroup>
      {/each}
      <div class="button-group">
        {#each getDrops("hsrOtherTraces5") as drop}
          <PresetButton type="hsrOtherTraces5" {drop} />
        {/each}
      </div>

      <div class="heading">
        <h4>4★ character traces</h4>
      </div>
      <div class="sub heading">
        <h5>Basic ATK trace</h5>
      </div>
      <RangeGroup type="hsrBasicAtkTrace4">
        <svelte:fragment let:from let:to>
          Lv. {from} to Lv. {to}
        </svelte:fragment>
      </RangeGroup>
      <div class="button-group">
        {#each getDrops("hsrBasicAtkTrace4") as drop}
          <PresetButton type="hsrBasicAtkTrace4" {drop} />
        {/each}
      </div>

      <div class="sub heading">
        <h5>Other traces</h5>
        <RangeGroupAddButton type="hsrOtherTraces4" maxRangeGroupLength={4} />
      </div>
      {#each $presetOptions.hsrOtherTraces4.rangeGroups as group, index (group.id)}
        <RangeGroup type="hsrOtherTraces4" {index}>
          <svelte:fragment let:from let:to>
            Lv. {from} to Lv. {to}
          </svelte:fragment>
          <div slot="after">
            <RangeGroupRemoveButton type="hsrOtherTraces4" {index} />
          </div>
        </RangeGroup>
      {/each}
      <div class="button-group">
        {#each getDrops("hsrOtherTraces4") as drop}
          <PresetButton type="hsrOtherTraces4" {drop} />
        {/each}
      </div>

      <div class="heading">
        <h4>5★ light cone ascension</h4>
      </div>
      <RangeGroup type="hsrLightConeAscension5" />
      <div class="button-group">
        {#each getDrops("hsrLightConeAscension5") as drop}
          <PresetButton type="hsrLightConeAscension5" {drop} />
        {/each}
      </div>

      <div class="heading">
        <h4>4★ light cone ascension</h4>
      </div>
      <RangeGroup type="hsrLightConeAscension4" />
      <div class="button-group">
        {#each getDrops("hsrLightConeAscension4") as drop}
          <PresetButton type="hsrLightConeAscension4" {drop} />
        {/each}
      </div>
    </div>
    {/if}
  </section>

  <OtherCalculatorsSection />

  <PresetExplanationModal bind:showModal={showPresetExplanationModal} />
  <SimplifiedValuesExplanationModal bind:showModal={showSimplifiedValuesExplanationModal} />
</main>
