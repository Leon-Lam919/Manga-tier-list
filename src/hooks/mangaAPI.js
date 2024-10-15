const animeTitle = 'Naruto'; // Example ISBN
const apiUrl = `https://api.mangadex.dev/manga?`;

const params = new URLSearchParams({
  title: 'Naruto',
  limit: 10,
  offset: 0
});

//Make the API call
fetch(`${apiUrl}?${params}`)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network reponse was not ok" + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log("Manga Data:", data);
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
