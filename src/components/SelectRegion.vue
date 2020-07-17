<template>
  <div>
    <label for="cars">Filter by continent:</label>
    <select name="region" id="region">
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
