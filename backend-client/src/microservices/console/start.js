import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { SERVICE_NAMES } from '../../common/constants.js';
import { CONSOLE_MICROSERVICE_PORT as consolePort, CORS_CONFIGURATION } from '../../configs/microservices_configs.js';
import { console_service_start } from './constants.js';
import { consoleWithTimeStamp } from '../../utils/console_override.js';
import { objectToSendFunc } from '../../utils/data_send.js';

const app = express();
const server = createServer(app);
const io = new Server(server, CORS_CONFIGURATION);
const service_name = SERVICE_NAMES['CONSOLE'];

app.get('/', (req, res) => {
    consoleWithTimeStamp(`Someone join on ${service_name}`);
    res.sendStatus(200);
});


io.on('connection', (socket) => {
    consoleWithTimeStamp('a user connectedd');
    socket.emit('consoleStatusUpdate', objectToSendFunc("info", "Console service start!", service_name));
});

server.listen(consolePort, () => {
    consoleWithTimeStamp(`${console_service_start(service_name, consolePort)}`);
});
