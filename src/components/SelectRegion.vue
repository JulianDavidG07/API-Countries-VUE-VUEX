<template>
  <div>
    <label for="cars">Filter by Region:</label>
    <select
      class="bg-blue-400 rounded-lg border border-black mx-1 font-light focus:outline-none"
      name="region"
      id="region"
    >
      <option value="All">All</option>
      <option value="America">America</option>
      <option value="Africa">Africa</option>
      <option value="Europa">Europa</option>
      <option value="Asia">Asia</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "selectRegion",
};
</script>

<style></style>
