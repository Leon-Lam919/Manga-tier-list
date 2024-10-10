const isbn = '0451526538'; // Example ISBN
const apiUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const bookKey = `ISBN:${isbn}`;  // Ensure we are accessing the correct key
    const book = data[bookKey];       // Extract the book information using the correct key
    if (book) {
      console.log('Title:', book.title);
      console.log('Authors:', book.authors.map(author => author.name).join(", "));
      console.log('Published:', book.publish_date);
    } else {
      console.log('Book not found');
    }
  })
  .catch(error => console.error('Error fetching data:', error));

