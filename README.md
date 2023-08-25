## UrlShortenerExample =>

In this project directory, we shrink the full url address into unique short ids  using npm "shortid" package . so you can run :

### `npm run start`

It runs the server on port 5000 and connect successfully our server to databse.\

### `Create short id`

- We require npm "shortid" package in our codebase . First we create post request where we give full url address to the server and it return shord id or value as a response. It generate full url into a short id.
- And then we send get request to server using this generated short id to check this short url are working or not.
- And we can also get analytics details,to hit endpoint with analytics/shortId.


### `npm shortid pakage`

- There is a NPM package called 'shortid' used to create short non-sequential url-friendly unique ids. By default, it uses 7-14 url-friendly characters: A-Z, a-z, 0-9, _-..
