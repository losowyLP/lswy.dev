<script setup>
import Page from "../../templates/page.vue";
</script>

<template>
  <Page title="Launchpad Projects">
    <h3 class="opacity-80">blurred = unavailable</h3>
    <div class="flex justify-center">
      <div class="w-8/12 m-2 grid lg:grid-cols-3 gap-2 justify-items-center">
        <div class="">
          <img
            src="../../assets/images/thumbnails/meantforyou.png"
            class="pb-1 blur ring ring-indigo-500"
          /><span>OMFG - Meant for You</span>
        </div>
        <div>
          <img
            src="../../assets/images/thumbnails/fire.png"
            class="pb-1 blur ring ring-sky-500"
          />
          <span>Brook Xiao - Fire (ft. Rachel Horter)</span>
        </div>
      </div>
    </div>
  </Page>
</template>
