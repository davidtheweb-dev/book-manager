<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'BookForm',
  data() {
    return {
      title: '',
      author: '',
      year: '',
      genreInput: '',
      description: '',
      pages: '',
      editorial: '',
      language: '',
      isbn: '',
      price: '',
      stock: '',
      favourite: '',
      rating: '',
      image: '',
      error: false,
    };
  },
  methods: {
    createBook() {
      if (!this.title || !this.author || !this.description || !this.year) {
        this.error = true;
        return;
      }

      const genres = this.genreInput.split(',').map((genre) => genre.trim());

      const book = {
        id: uuidv4(),
        title: this.title,
        author: this.author,
        year: parseInt(this.year),
        pages: parseInt(this.pages),
        cover: this.image,
        genre: genres,
        description: this.description,
        editorial: this.editorial,
        language: this.language,
        isbn: this.isbn,
        price: this.price,
        stock: this.stock,
        favourite: this.favourite,
        rating: this.rating,
      };

      this.$emit('add-book', book);

      this.title = '';
      this.author = '';
      this.year = '';
      this.pages = '';
      this.cover = '';
      this.genreInput = '';
      this.description = '';
      this.editorial = '';
      this.language = '';
      this.isbn = '';
      this.price = '';
      this.stock = '';
      this.favourite = '';
      this.rating = '';
      this.error = false;
    },
  },
};
</script>

<template>
  <div class="book-form">
    <form class="book-form__form" @submit.prevent="createBook">
      <div class="book-form__form-group">
        <label for="title">Title</label>
        <input id="title" type="text" v-model="title" />
      </div>
      <div class="book-form__form-group">
        <label for="author">Author</label>
        <input id="author" type="text" v-model="author" />
      </div>
      <div class="book-form__form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="description"></textarea>
      </div>
      <div class="book-form__form-group">
        <label for="year">Year</label>
        <input id="year" type="number" v-model="year" />
      </div>
      <div class="book-form__form-group">
        <label for="pages">Pages</label>
        <input id="pages" type="number" v-model="pages" />
      </div>
      <div class="book-form__form-group">
        <label for="genre">Genre</label>
        <input id="genre" type="text" v-model="genreInput" />
      </div>
      <div class="book-form__form-group">
        <label for="editorial">Editorial</label>
        <input id="editorial" type="text" v-model="editorial" />
      </div>
      <div class="book-form__form-group">
        <label for="language">Language</label>
        <select id="language" v-model="language">
          <option value="">Select a language</option>
          <option value="Spanish">Spanish</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Italian">Italian</option>
          <option value="German">German</option>
        </select>
      </div>
      <div class="book-form__form-group">
        <label for="isbn">ISBN</label>
        <input id="isbn" type="text" v-model="isbn" />
      </div>
      <div class="book-form__form-group">
        <label for="price">Price</label>
        <input id="price" type="number" v-model="price" />
      </div>
      <div class="book-form__form-group">
        <label for="stock">Stock</label>
        <input id="stock" type="number" v-model="stock" />
      </div>
      <div class="book-form__form-group">
        <label for="favourite">Favourite</label>
        <input id="favourite" type="checkbox" v-model="favourite" />
      </div>
      <div class="book-form__form-group">
        <label for="rating">Rating</label>
        <select id="rating" v-model="rating">
          <option value="">Select a rating</option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
      </div>
      <div class="book-form__form-group">
        <label for="cover">Image</label>
        <input id="cover" type="url" v-model="image" />
      </div>
      <div class="book-form__form-group">
        <button class="book-form__submit" type="submit">Add book</button>
      </div>
      <div v-if="error" class="book-form__error">
        Error submitting form. Please try again.
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
.book-form__form-group textarea,
.book-form__form-group select {
  width: 80%;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  outline: none;
  text-align: left;
}
.book-form__form-group input:focus,
.book-form__form-group textarea:focus,
.book-form__form-group select:focus {
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
.book-form__error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
