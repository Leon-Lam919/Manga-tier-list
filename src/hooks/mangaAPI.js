// Imports
const axios = require('axios');
const qs = require('qs');
require('dotenv').config();
// function that makes the API call and verifies creds
async function fetch_data() {
  const cred = {
    grant_type: "password",
    username: process.env.MANGADEX_USERNAME,
    password: process.env.MANGADEX_PASSWORD,
    client_id: process.env.MANGADEX_CLIENT_ID,
    client_secret: process.env.MANGADEX_CLIENT_SECRET
  }
  try {
    const resp = await axios({
      method: 'POST',
      url: 'https://auth.mangadex.org/realms/mangadex/protocol/openid-connect/token',
      data: qs.stringify(cred),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    const { access_token, refresh_token } = resp.data;
    console.log("access token: ", access_token);
    console.log("Refresh token: ", refresh_token);
  } catch (error) {
    console.error("Error is:", error);
  }
}

//  gets the manga ID of Naruto RN
async function get_manga() {
  const title = 'Naruto';
  const baseUrl = 'https://api.mangadex.org';
  const resp = await axios({
    method: 'GET',
    url: `${baseUrl}/manga`,
    params: {
      title: title
    }
  });

  console.log(resp.data.data.map(manga => manga.attributes.title));
}

get_manga();
