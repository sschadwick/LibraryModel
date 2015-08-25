function Library(libraryName) { //name of library
  this.name = libraryName;
  this.shelves = []; //library does not start with any defined shelves

  this.addShelf = function(shelf) { //add a new shelf to library
    this.shelves.push(shelf);
  }

  this.removeShelf = function(shelf) { //remove a specific shelf from the library
    var i = this.shelves.indexOf(shelf); //select item to be removed
    if (i != -1) {
      this.shelves.splice(i, 1);
    }
  }

  //suggestBook function will choose a shelf and call Shelf.suggestBook
  this.suggestBook = function() {
    var suggestShelf = this.shelves[Math.floor((Math.random()) * this.shelves.length)];
    return "Suggested Reading: " + suggestShelf.suggestBook().bookName + ' by ' + suggestShelf.suggestBook().author;
  }
}

Library.prototype.toString = function() {
  var shelfString = '';
  for (var i = 0; i < this.shelves.length; i++) {
    shelfString += this.shelves[i].toString();
  }
  return this.name + ': ' + shelfString;
}
//returns a string with all book names

module.exports = Library;
