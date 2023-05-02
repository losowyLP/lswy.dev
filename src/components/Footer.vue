<script>
const hearts = [
  "🩷",
  "❤️",
  "🧡",
  "💛",
  "💚",
  "🩵",
  "💙",
  "💜",
  "🖤",
  "🩶",
  "🤍",
  "🤎",
  "💖",
];

const randHeart = Math.floor(Math.random() * hearts.length);

export default {
  data() {
    return {
      heart: hearts[randHeart],
    };
  },
};
</script>

<template>
  HEAD
  <div class="text-slate-200 h-12 flex justify-center">
    <hr class="fixed w-64" />
    <h1 class="relative top-1/4">made with ❤️ by lswy</h1>
  </div>
  =======
  <footer class="fixed bottom-2 min-w-full">
    <div class="text-slate-200 h-12 flex justify-center">
      <hr class="absolute w-64" />
      <h1 class="relative top-1/4">made with {{ heart }} by lswy</h1>
    </div>
  </footer>
  >>>>>>> 9c2db3c (add a random heart in the footer of the site)
</template>
