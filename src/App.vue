<template>
  <div>
    <div class="flex justify-center bg-blue-700">
      <router-link to="/" class="px-2 hover:bg-yellow-300" exact>Home</router-link>

      <router-link to="/about" class="px-2 hover:bg-yellow-300" exact>About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
.router-link-active {
  background: rgb(241, 241, 124);
}
</style>

