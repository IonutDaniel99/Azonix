import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { SERVICE_NAMES } from '../../common/constants.js';
// Configs Imports
import { WEATHER_MICROSERVICE_PORT as weatherPort } from '../../configs/microservices_ports.js';
import { consoleWithTimeStamp } from '../../utils/console_override.js';
import { weather_service_start } from './constants.js';

const app = express();
const server = createServer(app);
const io = new Server(server);

const service_name = SERVICE_NAMES['WEATHER'];

app.get('/', (req, res) => {
    consoleWithTimeStamp(`Someone join on ${service_name}`);
    res.sendStatus(200);
});

io.on('connection', (socket) => {
    consoleWithTimeStamp('a user connected');
});

server.listen(weatherPort, () => {
    consoleWithTimeStamp(`${weather_service_start(service_name, weatherPort)}`);
});
