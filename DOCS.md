# Live Demo : [Here](https://jr-frontend-assignment.vercel.app/)

# Running Locally

Before Running the application, obtain the Spotify credentials from [The Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
After the application is created, a client ID and client secret will be provided.

1) Open you terminal and run the command to clone the repository:
```
git clone https://github.com/OzoneBht1/jr-frontend-assignment
```

2) Navigate to the clone repo:
```
cd jr-frontend-assignment
```
3) Create a .env file in the root directory and add required variables:
```
touch .env
vi .env
```

```
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
```

Replace your_client_id and your_client_secret from the values provided in Spotify Developer Dashboard.

4) Install the dependencies
```
npm install
```

5) Run the server
```
npm run dev
```

The music app should now be running at 'http://localhost:3000'
