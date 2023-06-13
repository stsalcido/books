const API_KEY = config.API_KEY;

const fetchBooks = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${API_KEY}`);
      const result = await response.json();
      const books = result.items;
      return books;
    } catch (error) {
      console.error('Error fetching books:', error);
      return []; // Return an empty array in case of an error
    }
};
  
const createBookTitles = async () => {
    const books = await fetchBooks();
    const bookContainer = document.createElement('div');

    for (let book of books) {
        const bookDiv = document.createElement('div');
        bookDiv.innerText = book.volumeInfo.title;
        bookContainer.appendChild(bookDiv);
    }

    const booksListings = document.querySelector('.books')
    booksListings.appendChild(bookContainer);
}

createBookTitles()