import express from 'express';
import tasks from './tasksRoutes.js';
import bodyParser from 'body-parser';

const routes = (app) => {
    app.get("/", function(req, res) {
        // Express method to render an HTML view using a specified view engine
        res.render('index');
    });

    app.use(
        // We used these middlewares to parse some data
        // It's used to parse form data that is submitted in the body of a POST
        bodyParser.urlencoded({ extended: true }),
        // It's used to parse JSON data that is submitted in the body of a Request
        express.json(),
        // it's used in an express application to serve static files, such as HTML, CSS, JS, images, etc
        express.static('public', { 'Content-Type': 'application/javascript' }),
        tasks
    )

    // View engine is a software component that allows you to render dynamic HTML pages
    app.set("view engine", "ejs");
}

export default routes;

