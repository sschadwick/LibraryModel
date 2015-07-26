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
  this.suggestBook = function() { //suggest a random book from library
    var suggestion = this.books[Math.floor((Math.random()) * this.books.length)];
    return suggestion;
  }
}

module.exports = Shelf;
