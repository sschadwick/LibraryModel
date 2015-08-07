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
}

Library.prototype.toString = function() {
  var shelfString = '';
  for (var i = 0; i < this.shelves.length; i++) {
    shelfString += this.shelves[i].toString();
  }
  return this.name + ': ' + shelfString;
}

module.exports = Library;
