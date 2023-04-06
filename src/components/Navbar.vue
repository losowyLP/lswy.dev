<template>
  <div
    class="h-14 text-2xl md:text-3xl bg-slate-700 rounded-md px-2 text-slate-100 flex items-center shadow-md"
  >
    <div
      class="transition-all ease-in-out duration-500 absolute rotate-0 hover:rotate-180"
    >
      <img src="../assets/logo.png" class="h-14" />
    </div>
    <div class="w-full flex justify-end gap-x-4">
      <router-link to="/"
        ><h1 class="transition-colors duration-200 hover:text-slate-300">
          home
        </h1></router-link
      >
      <router-link to="/socials"
        ><h1 class="transition-colors duration-200 hover:text-slate-300">
          socials
        </h1></router-link
      >
      <router-link to="/downloads"
        ><h1 class="transition-colors duration-200 hover:text-slate-300">
          downloads
        </h1></router-link
      >
    </div>
  </div>
</template>
