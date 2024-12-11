import express from 'express';
import { establishConnection } from './src/config/DbConfig.js';
import logRouter from './src/router/LogRouter.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.json());
app.use(express.static(path.join(dirname, './src/public')));
app.use("/logs", logRouter);

app.get('/', (request, response) => {
    response.sendFile(path.join(dirname, './src/public/log.html'));
});

app.listen(9800, () => {
    console.log('Server is running on port 9800');
    establishConnection();
});
