<script setup>
import Page from "../../templates/page.vue";
</script>

<template>
  <Page title="Launchpad Projects">
    <div class="flex justify-center">
      <div class="w-8/12 m-2 grid lg:grid-cols-3 gap-2 justify-items-center">
        <div class="cursor-not-allowed">
          <img
            src="../../assets/images/thumbnails/meantforyou.png"
            class="ring ring-indigo-500"
          /><span>OMFG - Meant for You</span>
        </div>
        <div class="cursor-not-allowed">
          <img
            src="../../assets/images/thumbnails/fire.png"
            class="ring ring-sky-500"
          />
          <span>Brook Xiao - Fire (ft. Rachel Horter)</span>
        </div>
      </div>
    </div>
  </Page>
</template>
