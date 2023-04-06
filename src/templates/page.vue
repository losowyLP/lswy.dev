<script>
// AGE CALCULATOR LETS FUCKING GOOO
const bday = new Date("12/08/2008");
const secondsSinceBday = Math.floor((new Date() - bday) / 1000);

const age = Math.floor(secondsSinceBday / 31536000);

export default {
  data() {
    return {
      age: age,
    };
  },
  props: {
    title: String,
  },
};
</script>

<template>
  <div
    class="relative min-w-full min-h-screen bg-gradient-to-bl from-slate-800 to-slate-900 p-1 text-slate-100"
  >
    <nav>
      <Navbar />
    </nav>
    <main class="p-8 flex flex-col text-center">
      <h1 class="text-4xl">losowy</h1>
      <h2 class="text-xl pb-2">{{ age }} y/o programmer/music producer</h2>
      <hr class="p-1" />
      <h2 class="text-3xl">{{ title }}</h2>
      <slot />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
