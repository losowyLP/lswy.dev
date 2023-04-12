<script setup>
import Page from "../templates/page.vue";
</script>

<template>
  <Page title="downloads">
    <div class="flex justify-center">
      <div
        class="m-2 flex flex-col md:flex-row justify-around gap-32 lg:w-6/12"
      >
        <router-link to="/downloads/launchpad"
          ><img src="../assets/images/launchpad.png" class="h-64 w-64"
        /></router-link>
        <a href="https://github.com/losowyLP" target="_blank"
          ><img src="../assets/images/software.png" class="h-64 w-64"
        /></a>
      </div>
    </div>
  </Page>
</template>
