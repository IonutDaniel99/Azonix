import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

// Configs Imports
import { SERVICE_NAMES } from '../../common/constants.js';
import { CORS_CONFIGURATION, WEATHER_MICROSERVICE_PORT as weatherPort } from '../../configs/microservices_configs.js';
import { consoleWithTimeStamp } from '../../utils/console_override.js';
import { weather_service_start } from './constants.js';
import { objectToSendFunc } from '../../utils/data_send.js';

const app = express();
const server = createServer(app);
const io = new Server(server, CORS_CONFIGURATION);

const service_name = SERVICE_NAMES['WEATHER'];

app.use(cors());

app.get('/', (req, res) => {
    consoleWithTimeStamp(`Someone join on ${service_name}`);
    res.sendStatus(200);
});

io.on('connection', (socket) => {
    consoleWithTimeStamp(socket.id, 'a user connected');
    socket.emit('weatherStatusUpdate', objectToSendFunc("info", "Weather service start!", service_name));
});

server.listen(weatherPort, () => {
    consoleWithTimeStamp(`${weather_service_start(service_name, weatherPort)}`);
});
