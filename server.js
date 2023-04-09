import app from './src/app.js';

const port = process.env.PORT || 3000;

app.listen( port, () => {
    console.log( `Server running at http://localhost:${port}` );
})

// nodemon allows us to run the server in the background