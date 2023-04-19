<script>
import SearchBar from './components/SearchBar.vue';
import FilterBar from './components/FilterBar.vue';
import BookList from './components/BookList.vue';
import ModalLayer from './components/ModalLayer.vue';
import BookForm from './components/BookForm.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    FilterBar,
    BookList,
    ModalLayer,
    BookForm,
  },
  data() {
    return {
      books: [
        {
          id: 1,
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
          year: 1954,
          pages: 1216,
          cover: 'https://m.media-amazon.com/images/I/71VjmMcE-rL.jpg',
          genre: 'Fantasy',
          description:
            'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien.',
          editorial: 'Allen & Unwin',
          language: 'English',
          isbn: '978-0-261-10342-6',
          price: 22.95,
          stock: 10,
          favourite: true,
          rating: 5,
          personalNote: '',
        },
        {
          id: 2,
          title: 'Harry Potter and the Philosopher\'s Stone',
          author: 'J.K Rowling',
          year: 1997,
          pages: 223,
          cover: 'https://m.media-amazon.com/images/I/81m1s4wIPML.jpg',
          genre: 'Fantasy',
          description:
          'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling.',
          editorial: 'Bloomsbury',
          language: 'English',
          isbn: '978-0-7475-3269-9',
          price: 8.99,
          stock: 5,
          favourite: false,
          rating: 4,
          personalNote: 'I like this book',
        },
        {
          id: 3,
          title: 'Harry Potter and the Philosopher\'s Stone',
          author: 'J.K Rowling',
          year: 1997,
          pages: 223,
          cover: 'https://m.media-amazon.com/images/I/81m1s4wIPML.jpg',
          genre: 'Fantasy',
          description:
          'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling.',
          editorial: 'Bloomsbury',
          language: 'English',
          isbn: '978-0-7475-3269-9',
          price: 8.99,
          stock: 5,
          favourite: false,
          rating: 4,
          personalNote: 'I like this book',
        },
        {
          id: 4,
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
          year: 1954,
          pages: 1216,
          cover: 'https://m.media-amazon.com/images/I/71VjmMcE-rL.jpg',
          genre: 'Fantasy',
          description:
            'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien.',
          editorial: 'Allen & Unwin',
          language: 'English',
          isbn: '978-0-261-10342-6',
          price: 22.95,
          stock: 10,
          favourite: true,
          rating: 5,
          personalNote: '',
        },
      ],
      showModal: false,
    };
  },
};
</script>

<template>
  <div>
    <section class="header">
      <img class="logo" src="./assets/uoc-logo.png" alt="Logo" />
      <h1 class="title">Book manager</h1>
    </section>
    <section class="content">
      <SearchBar></SearchBar>
      <FilterBar></FilterBar>
      <main class="main">
        <BookList :books="books"></BookList>
      </main>
      <ModalLayer v-if="showModal" title="Add new book">
        <BookForm></BookForm>
      </ModalLayer>
    </section>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
.header__left {
  display: flex;
  align-items: center;
}
.logo {
  height: 40px;
  margin-right: 10px;
}
.title {
  font-size: 24px;
  font-weight: 400;
}
</style>
