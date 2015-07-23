function Book(author, bookName, genre) { //books have an author, a book name and a genre
  this.author = author;
  this.bookName = bookName;
  this.genre = genre;
}

module.exports = Book;
