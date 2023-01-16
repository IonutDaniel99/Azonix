import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { console_microservice_port } from '../../configs/microservices_ports.js';

const SERVICE_NAME = "Console"

const app = express()
const server = createServer(app);
const io = new Server(server);


app.get('/', (req, res) => {
    console.log(`Someone join on ${SERVICE_NAME}`)
    res.sendStatus(200)
});
  
io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(console_microservice_port, () => {
    console.log(`${SERVICE_NAME} service start succsesfuly on ${console_microservice_port} port.`);
});