function Book(author, bookName, genre) { //books have an author, a book name and a genre
  this.author = author;
  this.bookName = bookName;
  this.genre = genre;

  //provides book name
  this.toString = function() {
    return this.bookName;
  }
}

module.exports = Book;
