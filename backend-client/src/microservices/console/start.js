import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { console_service_start } from './constants.js';

import { SERVICE_NAMES } from '../../common/constants.js';
import { CONSOLE_MICROSERVICE_PORT as consolePort } from '../../configs/microservices_ports.js';
import { consoleWithTimeStamp } from '../../utils/console_override.js';

const app = express();
const server = createServer(app);
const io = new Server(server);

const service_name = SERVICE_NAMES['CONSOLE'];

app.get('/', (req, res) => {
    consoleWithTimeStamp(`Someone join on ${service_name}`);
    res.sendStatus(200);
});

io.on('connection', (socket) => {
    consoleWithTimeStamp('a user connected');
});

server.listen(consolePort, () => {
    consoleWithTimeStamp(`${console_service_start(service_name, consolePort)}`);
});
