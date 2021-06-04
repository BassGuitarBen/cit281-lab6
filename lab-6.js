//Cit281 Lab-06
//Benjamin Wright

class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }


  class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));

    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn };
        this._books.push(newBook);
      }
    }
    deleteBook(isbn) {
        let indexOfBookToRemove = null;
/*let indexOfBookToRemove = null;
 for (const book of this._books) {
     if (book.isbn == isbn){
         indexOfBookToRemove = index;
         break;
     }
     index += 1;
 }*/
 for (let index = 0; index < this._books.length; index++) {
     const book = this._books[index];
     if (book.isbn == isbn) {
         indexOfBookToRemove = index;
         break;
     }
     
 }


        this._books.splice(indexOfBookToRemove, 1);
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}`, `ISBN: ${isbn}`)
      }
    }
  }


  const myBook = new Book("1984", "George_Orwell", "1949", "123456789");
  const newBook = new Book("Advanced Accounting 4e", "Susan Hamlen", "2018", "987654321");
  const bestSeller = new Book("Summa Theologiae", "Thomas Aquinas", "1265", "951753246")
  // Create a book
  const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
  const theHillWeClimb = new Book("The Hill We Climb", "David Baldacci", "03/30/2021", "059346527X");
  const oceanPrey = new Book("Atomic Habits", "John Sandford", "04/13/2021", "1398505501");
let uoLibrary = new Library("Knight Library");
uoLibrary.addBook(myBook);
uoLibrary.addBook(atomicHabits);
uoLibrary.addBook(theHillWeClimb);
uoLibrary.addBook(oceanPrey);
uoLibrary.addBook(newBook);
uoLibrary.addBook(bestSeller);
console.log(`Book count: ${uoLibrary.count}`);

uoLibrary.listBooks();
  console.log(myBook);
  //console.log(`Book count: ${library.count}`);
  
  
  // Delete a book and output library books
  console.log("* Library after delete *");
  uoLibrary.deleteBook("059346527X");
  uoLibrary.listBooks();

