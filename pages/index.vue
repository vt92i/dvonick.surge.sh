<template>
  <div class="select-none bg-gray-800 flex flex-row items-center justify-center min-h-screen">
    <main class="flex flex-col items-center justify-center w-9/12 pt-4 pb-12 rounded-2xl">
      <img class="filter saturate-25 rounded-full w-48 h-48 ring-4 ring-blue-200 transition-all transform opacity-75 hover:scale-110 hover:opacity-100" src="../assets/avatar.JPG" />
      <h2 class="text-6xl font-bold text-white tracking-widest pt-6 transition-colors hover:text-yellow-600">Rizze Dvonick</h2>
      <h4 class="text-xl font-medium text-white tracking-wider">
        <a class="transition-colors hover:text-yellow-400" href="https://youtu.be/_GOR5gvQwDI" target="_blank" rel="noopener noreferrer"> I'm Just A Kid </a>
      </h4>
      <div class="flex flex-row pt-2">
        <a class="pl-4 transition-transform transform hover:scale-125" href="https://github.com/vt92i" target="_blank" rel="noopener noreferrer">
          <img class="w-8" src="../assets/github.png" />
        </a>
        <a class="pl-4 transition-transform transform hover:scale-125" href="https://twitter.com/wtsrz4" target="_blank" rel="noopener noreferrer">
          <img class="w-8" src="../assets/twitter.png" />
        </a>
      </div>
      <footer class="flex flex-col items-center pt-12">
        <span class="text-sm font-light text-white">
          Built with
          <a class="text-green-400 font-bold opacity-75 transition-opacity hover:opacity-100" href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer"> NuxtJS </a>
          and
          <a class="text-blue-400 font-bold opacity-75 transition-opacity hover:opacity-100" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"> TailwindCSS </a>
        </span>
        <span class="text-sm font-light text-white">
          Hosted on
          <a class="text-gray-400 font-bold opacity-75 transition-opacity hover:opacity-100" href="https://surge.sh/" target="_blank" rel="noopener noreferrer"> Surge </a>
        </span>
        <span>❤️</span>
      </footer>
    </main>
  </div>
</template>