<script>
export default {
  name: 'FilterBar',
};
</script>

<template>
  <div class="filter-bar">
    <div class="filter-bar__select">
      <label for="sort">Sort by:</label>
      <select id="sort">
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="year">Year</option>
        <option value="year">Rating</option>
      </select>
    </div>
    <div class="filter-bar__select">
      <label for="order">Sort by:</label>
      <select id="order">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
    <div class="filter-bar__check">
      <input type="checkbox" id="favourites" />
      <label for="favourites">Favourite</label>
    </div>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ccc;
}
.filter-bar__select {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.filter-bar__select label {
  margin-right: 10px;
}
.filter-bar__select select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}
.filter-bar__check {
  display: flex;
  align-items: center;
}
.filter-bar__check input {
  margin-right: 10px;
}
.filter-bar__check label {
  cursor: pointer;
}
</style>
