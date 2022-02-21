const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      url: 'https://www.google.com',
      books: [
        {
          title: 'the way of the wind',
          author: 'yasuo kanzibou',
          img: 'assets/1.jpg',
          isFav: false,
        },
        {
          title: 'the last knight',
          author: 'Behlul UYSAL',
          img: 'assets/2.jpg',
          isFav: true,
        },
        {
          title: 'wings of butterflies',
          author: 'Cassandra Lue',
          img: 'assets/3.jpg',
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  // a property that depends on all the data
  // when the other data changes, this will update
  // for index2
  computed: {
    filteredFavBooks() {
      return this.books.filter((book) => book.isFav);
    },
    filteredNotFavBooks() {
      return this.books.filter((book) => !book.isFav);
    },
  },
});

app.mount('#app');
