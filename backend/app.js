const express = require('express')
const cors = require('cors')
const apiRouter = require('./routes')

const createDB = require('./database/utils/createDB');
const seedDB = require('./database/utils/seedDB')
const db = require('./database')

const app = express();

const syncDatabase = async () => {
    try {
        await db.sync({force: true});
        console.log('Synced to db');
        await seedDB();
        console.log('Successfully seeded db');
    } catch (err) {
        console.error('syncDB error:', err);
    }
}

const configureApp = async () => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.get('/favicon.ico', (req, res) => res.status(204));

    app.get('/ping', (request, response) => {
        response.send('pong')
    });

    app.use('/api', apiRouter);

    app.use((err, req, res, next) => {
        console.error(err);
        console.log(req.originalUrl);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
    });
};

const bootApp = async () => {
    await createDB();
    await syncDatabase();
    await configureApp();
}

// PROGRAM STARTS HERE
bootApp();

const PORT = 5001;
app.listen(PORT, console.log(`Server started on ${PORT}`));