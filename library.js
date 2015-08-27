function Library(libraryName) { //name of library
  this.name = libraryName;
  this.shelves = []; //library does not start with any defined shelves
}

//method to add new shelf to library
Library.prototype.addShelf = function(shelf) {
  this.shelves.push(shelf); //add new shelf to library
}

Library.prototype.removeShelf = function(shelf) { //remove a specific shelf from the library
  var i = this.shelves.indexOf(shelf); //select item to be removed
  if (i != -1) {
    this.shelves.splice(i, 1); //splice out location of shelf
  }
}

//suggestBook function will choose a shelf and call Shelf.suggestBook. Returns suggested book and author
Library.prototype.suggestBook = function() {
  var suggestShelf = this.shelves[Math.floor((Math.random()) * this.shelves.length)];
  return "Suggested Reading: " + suggestShelf.suggestBook().bookName + ' by ' + suggestShelf.suggestBook().author;
}

  //return a string with all books in library
Library.prototype.toString = function() {
  var shelfString = '';
  for (var i = 0; i < this.shelves.length; i++) {
    shelfString += this.shelves[i].toString(); //call shelves.toString on all shelves
  }
  return this.name + ': ' + shelfString;
}


module.exports = Library;
