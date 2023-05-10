<script>
import BookItem from './BookItem.vue';

export default {
  name: 'BookList',
  components: {
    BookItem,
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteBook(id) {
      this.$emit('delete-book', id);
    },
  },
};
</script>

<template>
  <div class="book-list">
    <BookItem
      v-for="book in books"
      :key="book.id"
      :book="book"
      @delete-book="deleteBook"
    />
  </div>
</template>

<style scoped>
.book-list {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
</style>
