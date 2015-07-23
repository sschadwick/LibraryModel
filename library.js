function Library(libraryName) { //name of library
  this.name = libraryName;
  this.shelves = []; //library does not start with any defined shelves

  this.addShelf = function(shelfName) { //add a new shelf to library
    this.shelves.push(shelfName);
  }

  this.removeShelf = function(shelfName) { //remove a specific shelf from the library
    var i = this.shelves.indexOf(shelfName); //select item to be removed
    if (i != -1) {
      this.shelves.splice(i, 1);
    }
  }
}

module.exports = Library;
