var Library = require('./library'); //link to modular objects of library
var Shelf = require('./shelves');
var Book = require('./books');

var greenwoodLibrary = new Library('Greenwood Library'); //create new instance of library

var thriller = new Shelf('Thriller'); //create two instances of shelves
var comedy = new Shelf('Comedy');

greenwoodLibrary.addShelf(thriller); //add shelves to the library
greenwoodLibrary.addShelf(comedy);

//create new book instances
var sherlockHolmes = new Book('Sir Author Conan Doyle', 'Hound of the Baskervilles', 'Thriller');
var scoobyDoo = new Book('Sonia Sander', 'Scooby-Doo and the Cupcake Caper', 'Thriller');
var jamesBond = new Book('Sir Ian Fleming', 'Goldfinger', 'Thriller');

var whosOnFirst = new Book('Abott and Costello', 'Who\'s On First', 'Comedy');
var iAmAmerica = new Book('Stephen Colbert', 'I Am America (And So Can You!)', 'Comedy');
var ohMyyy = new Book('George Takai', 'Oh Myyy!', 'Comedy');

thriller.addBook(sherlockHolmes); //add the new books to their shelves
thriller.addBook(scoobyDoo);
thriller.addBook(jamesBond);
comedy.addBook(whosOnFirst);
comedy.addBook(iAmAmerica);
comedy.addBook(ohMyyy);

console.log(greenwoodLibrary.toString());
