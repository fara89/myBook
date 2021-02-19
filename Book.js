export class Book {
  constructor(title, author, pages, description, currentPage, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.currentPage = currentPage;
    this.read = read;
  }
  readBook(page) {
    if(page < 1 || page > this.pages) {
      return 0;
    } else if (page >= 1 && page< this.pages) {
      this.currentPage = page;
      return 1;
    } else if (page === this.pages){
      this.currentPage = page;
      this.read = true;
      return 1;
    }
    }
    }

let myBook = new Book ('The Story', 'Farah', 250, 'interesting', 50, false);
let mySecondBook = new Book ('Life', "Will", 50, 'nice', 25, false);
let myThirdBook =  new Book ('Life', "Will", 100, 'nice', 70, false);

export const books = [myBook, mySecondBook, myThirdBook];
