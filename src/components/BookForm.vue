<script>
import { uuid } from 'vue-uuid';

export default {
  name: 'BookForm',
  data: () => ({
    book: {
      title: '',
      author: '',
      description: '',
      year: '',
      pages: '',
      genre: '',
      editorial: '',
      language: '',
      isbn: '',
      price: '',
      stock: '',
      favourite: false,
      rating: '',
      cover: '',
    },
  }),
  methods: {
    resetBook() {
      this.book = {
        title: '',
        author: '',
        description: '',
        year: '',
        pages: '',
        genre: '',
        editorial: '',
        language: '',
        isbn: '',
        price: '',
        stock: '',
        favourite: false,
        rating: '',
        cover: '',
      };
    },
    closeForm() {
      this.resetBook();
      this.$emit('close-modal');
    },
    createBook() {
      if (
        (this.book.title === '' || this.book.author === '',
        this.book.description === '')
      ) {
        alert('Please fill in the title and author fields');
        return;
      }
      this.book.id = uuid.v4();
      this.book.genre = this.book.genre.split(',');
      this.$emit('add-book', this.book);
      this.resetBook();
    },
  },
};
</script>

<template>
  <div class="book-form">
    <form class="book-form__form" @submit.prevent="createBook">
      <div class="book-form__form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="book.title" />
      </div>
      <div class="book-form__form-group">
        <label for="author">Author</label>
        <input type="text" id="author" v-model="book.author" />
      </div>
      <div class="book-form__form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="book.description"></textarea>
      </div>
      <div class="book-form__form-group">
        <label for="year">Year</label>
        <input type="number" id="year" v-model="book.year" />
      </div>
      <div class="book-form__form-group">
        <label for="pages">Pages</label>
        <input type="number" id="pages" v-model="book.pages" />
      </div>
      <div class="book-form__form-group">
        <label for="genre">Genre</label>
        <input type="text" id="genre" v-model="book.genre" />
      </div>
      <div class="book-form__form-group">
        <label for="editorial">Editorial</label>
        <input type="text" id="editorial" v-model="book.editorial" />
      </div>
      <div class="book-form__form-group">
        <label for="language">Language</label>
        <select id="language" v-model="book.language">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          <option value="zh">Chinese</option>
          <option value="ja">Japanese</option>
        </select>
      </div>
      <div class="book-form__form-group">
        <label for="isbn">ISBN</label>
        <input type="text" id="isbn" v-model="book.isbn" />
      </div>
      <div class="book-form__form-group">
        <label for="price">Price</label>
        <input type="number" id="price" v-model="book.price" />
      </div>
      <div class="book-form__form-group">
        <label for="stock">Stock</label>
        <input type="number" id="stock" v-model="book.stock" />
      </div>
      <div class="book-form__form-group">
        <label for="favourite">Favourite</label>
        <input type="checkbox" id="favourite" v-model="book.favourite" />
      </div>
      <div class="book-form__form-group">
        <label for="rating">Rating</label>
        <select id="rating" v-model="book.Rating">
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
      </div>
      <div class="book-form__form-group">
        <label for="image">Image</label>
        <input type="text" id="image" v-model="book.cover" />
      </div>
      <div class="book-form__form-group">
        <button type="submit" class="book-form__submit">Add book</button>
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
</style>
