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
      showModal: false,
      sortBy: 'title',
      orderBy: 'asc',
      favourite: false,
      searchTerm: '',
      bookList: [
        {
          id: 1,
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
          year: 1954,
          pages: 1216,
          cover: 'https://m.media-amazon.com/images/I/71VjmMcE-rL.jpg',
          genre: ['Fantasy', 'Adventure', 'Epic'],
          description:
            "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
          editorial: 'Allen & Unwin',
          language: 'English',
          isbn: '978-0-261-10342-6',
          price: 22.95,
          stock: 10,
          favourite: true,
          rating: 5,
          personalNote: 'This is my favourite book',
        },
        {
          id: 2,
          title: "Harry Potter and the Philosopher's Stone",
          author: 'J.K. Rowling',
          year: 1997,
          pages: 223,
          cover:
            'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81m1s4wIPML.jpg',
          genre: ['Fantasy', 'Adventure', 'Epic'],
          description:
            "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
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
          title: 'And Then There Were None',
          author: 'Agatha Christie',
          year: 1939,
          pages: 288,
          cover:
            'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/819i8joMtRL.jpg',
          genre: ['Mystery', 'Thriller', 'Crime'],
          description: '',
          editorial: 'Collins Crime Club',
          language: 'English',
          isbn: '978-0-00-720189-2',
          price: 9.99,
          stock: 3,
          favourite: false,
          rating: 3,
          personalNote: "I don't like this book",
        },
        {
          id: 4,
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          year: 1937,
          pages: 310,
          cover:
            'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/710+HcoP38L.jpg',
          genre: ['Fantasy', 'Adventure', 'Epic'],
          description:
            "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.",
          editorial: 'Allen & Unwin',
          language: 'English',
          isbn: '978-0-261-10342-6',
          price: 9.99,
          stock: 2,
          favourite: true,
          rating: 5,
          personalNote: 'This is my favourite book',
        },
        {
          id: 5,
          title: 'The Lion, the Witch and the Wardrobe',
          author: 'C.S. Lewis',
          year: 1950,
          pages: 208,
          cover: 'https://m.media-amazon.com/images/I/71VjmMcE-rL.jpg',
          genre: ['Fantasy', 'Adventure', 'Epic'],
          description:
            "The Lion, the Witch and the Wardrobe is a high fantasy novel for children by C. S. Lewis, published by Geoffrey Bles in 1950. It is the first published and best known of seven novels in The Chronicles of Narnia (1950–1956). It is considered a classic of children's literature and is the author's best-known work, having sold over 100 million copies in 47 languages.",
          editorial: 'Geoffrey Bles',
          language: 'English',
          isbn: '978-0-00-720189-2',
          price: 9.99,
          stock: 1,
          favourite: false,
          rating: 4,
          personalNote: 'I like this book',
        },
      ],
    };
  },
  methods: {
    addBook(book) {
      this.bookList = [...this.bookList, book];
      this.toggleForm();
    },
    deleteBook(id) {
      this.bookList = this.bookList.filter((book) => book.id !== id);
    },
    toggleForm() {
      this.showModal = !this.showModal;
    },
    setSearchTerm(value) {
      this.searchTerm = value;
    },
    sortBooks(sortBy) {
      this.sortBy = sortBy;
    },
    orderBooks(orderBy) {
      this.orderBy = orderBy;
    },
    favouriteBooks(favourite) {
      this.favourite = favourite;
    },
  },
  computed: {
    filteredBooks() {
      let bookList = this.bookList;

      bookList = this.bookList.sort((a, b) => {
        if (this.sortBy === 'title') {
          return a.title.localeCompare(b.title);
        } else if (this.sortBy === 'author') {
          return a.author.localeCompare(b.author);
        } else if (this.sortBy === 'year') {
          return a.year - b.year;
        } else if (this.sortBy === 'pages') {
          return a.pages - b.pages;
        } else if (this.sortBy === 'price') {
          return a.price - b.price;
        } else if (this.sortBy === 'stock') {
          return a.stock - b.stock;
        } else if (this.sortBy === 'rating') {
          return a.rating - b.rating;
        }
      });
      if (this.orderBy === 'desc') {
        bookList = this.bookList.reverse();
      }
      if (this.favourite) {
        bookList = this.bookList.filter((book) => book.favourite);
      }

      if (!this.searchTerm) {
        return bookList;
      } else {
        bookList = this.bookList.filter((book) => {
          return (
            book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            book.description
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase()) ||
            book.genre.some((item) =>
              item.toLowerCase().includes(this.searchTerm.toLowerCase())
            )
          );
        });
      }
      return bookList;
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="header__left">
      <img class="logo" src="./assets/uoc-logo.png" alt="UOC logo" />
      <h1 class="title">Book manager</h1>
    </div>
  </header>
  <SearchBar @show-form="toggleForm" @search="setSearchTerm" />
  <FilterBar
    @sort-items="sortBooks"
    @order-items="orderBooks"
    @favourite-items="favouriteBooks"
  />
  <main class="main">
    <BookList :books="filteredBooks" @delete-book="deleteBook" />
  </main>
  <ModalLayer v-if="showModal" @close-modal="toggleForm">
    <template #header>
      <h2>Add a new book</h2>
    </template>
    <template #body>
      <BookForm @add-book="addBook" />
    </template>
  </ModalLayer>
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
