function Shelf(shelfName) {
  this.name = shelfName;
  this.books = [];  //library initially has no books

  this.addBook = function(bookName) { //function to add a new book to the shelf
    this.books.push(bookName);
  }

  this.removeBook = function(bookName) {
    var i = this.books.indexOf(bookName); //find index of bookName to be removed in books
    if (i != -1) {
      this.books.splice(i, 1); //splice out location of bookName
    }
  }

  //suggest a random book from shelf
  this.suggestBook = function() {
    var suggestion = this.books[Math.floor((Math.random()) * this.books.length)]; //choose random
    return suggestion;
  }

  //call books.toString on all books on this shelf
  this.toString = function() {
    var bookString = '';
    for (var i = 0; i < this.books.length; i++) { //for all books
      bookString += this.books[i].toString() + '. '; //record names of books
    }
    return this.name + ': ' + bookString;
  }
}

module.exports = Shelf;
