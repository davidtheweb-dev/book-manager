<script>
export default {
  name: 'BookForm',
};
</script>

<template>
  <div class="book-form">
    <form class="book-form__form">
      <div class="book-form__form-group">
        <label for="title">Title</label>
        <input id="title" type="text" required />
      </div>
      <div class="book-form__form-group">
        <label for="author">Author</label>
        <input id="author" type="text" required />
      </div>
      <div class="book-form__form-group">
        <label for="description">Description</label>
        <textarea id="description" required></textarea>
      </div>
      <div class="book-form__form-group">
        <label for="year">Year</label>
        <input id="year" type="number" required />
      </div>
      <div class="book-form__form-group">
        <label for="pages">Pages</label>
        <input id="pages" type="number" required />
      </div>
      <div class="book-form__form-group">
        <label for="genre">Genre</label>
        <input id="genre" type="text" required />
      </div>
      <div class="book-form__form-group">
        <label for="editorial">Editorial</label>
        <input id="editorial" type="text" required />
      </div>
      <div class="book-form__form-group">
        <label for="language">Language</label>
        <input id="language" type="text" required />
      </div>
      <div class="book-form__form-group">
        <label for="isbn">ISBN</label>
        <input id="isbn" type="text" required />
      </div>
      <div class="book-form__form-group">
        <label for="price">Price</label>
        <input id="price" type="number" required />
      </div>
      <div class="book-form__form-group">
        <label for="stock">Stock</label>
        <input id="stock" type="number" required />
      </div>
      <div class="book-form__form-group">
        <label for="favourite">Favourite</label>
        <input id="favourite" type="checkbox" />
      </div>
      <div class="book-form__form-group">
        <label for="rating">Rating</label>
        <input id="rating" type="number" min="0" max="5" step="1" required />
      </div>
      <div class="book-form__form-group">
        <label for="cover">Image</label>
        <input id="cover" type="url" required />
      </div>
      <div class="book-form__form-group">
        <button class="book-form__submit" type="submit">Add book</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.book-form__form {
  display: flex;
  flex-wrap: wrap;
}
.book-form__form-group {
  margin-bottom: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
}
.book-form__form-group label {
  display: block;
  margin-bottom: 10px;
  text-align: left;
  font-size: 14px;
}
.book-form__form-group input,
.book-form__form-group textarea {
  width: 80%;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  outline: none;
  text-align: left;
}
.book-form__form-group input:focus,
.book-form__form-group textarea:focus {
  border-color: #000;
}
.book-form__form-group textarea {
  height: 100px;
}
.book-form__submit {
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  min-width: 100px;
  background-color: #4caf50;
  color: #fff;
}
.book-form__submit:hover {
  background-color: #43a047;
}
</style>
