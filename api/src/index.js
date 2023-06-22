const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let bookList = [
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
    favorite: true,
    rating: 5,
    personalNote: 'This is my favorite book',
  },
  {
    id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    pages: 223,
    cover: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81m1s4wIPML.jpg',
    genre: ['Fantasy', 'Adventure', 'Epic'],
    description:
      "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
    editorial: 'Bloomsbury',
    language: 'English',
    isbn: '978-0-7475-3269-9',
    price: 8.99,
    stock: 5,
    favorite: false,
    rating: 4,
    personalNote: 'I like this book',
  },
  {
    id: 3,
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    year: 1939,
    pages: 288,
    cover: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/819i8joMtRL.jpg',
    genre: ['Mystery', 'Thriller', 'Crime'],
    description: '',
    editorial: 'Collins Crime Club',
    language: 'English',
    isbn: '978-0-00-720189-2',
    price: 9.99,
    stock: 3,
    favorite: false,
    rating: 3,
    personalNote: "I don't like this book",
  },
];

let book = {
  id: 0,
  title: '',
  author: '',
  year: 0,
  pages: 0,
  cover: '',
  genre: [],
  description: '',
  editorial: '',
  language: '',
  isbn: '',
  price: 0,
  stock: 0,
  favorite: false,
  rating: 0,
  personalNote: '',
};

let response = {
  error: false,
  codigo: 200,
  mensaje: '',
};
app.get('/', function (req, res) {
  response = {
    error: true,
    codigo: 200,
    mensaje: 'API REST working. You can use /book /catalog endpoints',
  };
  res.send(response);
});
app.route('/catalog').get(function (req, res) {
  response = {
    error: false,
    codigo: 200,
    mensaje: '',
  };
  response = {
    error: false,
    codigo: 200,
    mensaje: 'Book list',
    recipes: bookList,
  };
  res.send(response);
});
app
  .route('/book')
  .get(function (req, res) {
    if (!req.body.id) {
      response = {
        error: true,
        codigo: 502,
        mensaje: 'Required parameter id',
      };
    } else {
      const book = bookList.find((book) => book.id === req.body.id);
      if (book) {
        response = {
          error: false,
          codigo: 200,
          mensaje: 'Book found',
          recipe: book,
        };
      } else {
        response = {
          error: true,
          codigo: 503,
          mensaje: "Book doesn't exist",
        };
      }
    }
    res.send(response);
  })
  .post(function (req, res) {
    if (!req.body.id || !req.body.title || !req.body.author || !req.body.year) {
      response = {
        error: true,
        codigo: 502,
        mensaje: 'Required id and message fields',
      };
    } else {
      if (bookList.find((item) => item.id === req.body.id)) {
        response = {
          error: true,
          codigo: 503,
          mensaje: 'Book already created',
        };
      } else {
        book = {
          id: req.body.id,
          title: req.body.title,
          author: req.body.author,
          year: req.body.year,
          pages: req.body.pages,
          cover: req.body.cover,
          genre: req.body.genre,
          description: req.body.description,
          editorial: req.body.editorial,
          language: req.body.language,
          isbn: req.body.isbn,
          price: req.body.price,
          stock: req.body.stock,
          favorite: req.body.favorite,
          rating: req.body.rating,
          personalNote: req.body.personalNote,
        };

        bookList.push(book);
        response = {
          error: false,
          codigo: 200,
          mensaje: 'Book created',
          recipe: book,
        };
      }
    }

    res.send(response);
  })
  .delete(function (req, res) {
    if (!bookList.find((item) => item.id === req.body.id)) {
      response = {
        error: true,
        codigo: 501,
        mensaje: 'Recipe not deleted',
      };
    } else {
      bookList = bookList.filter((item) => item.id !== req.body.id);

      response = {
        error: false,
        codigo: 200,
        mensaje: 'Book deleted',
      };
    }
    res.send(response);
  });
app.use(function (req, res) {
  response = {
    error: true,
    codigo: 404,
    mensaje: 'URL not found',
  };
  res.status(404).send(response);
});
app.listen(port, () => {
  console.log('Server started. Port 3000');
});
