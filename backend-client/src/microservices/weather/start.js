import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
// Configs Imports
import {weather_microservice_port } from '../../configs/microservices_ports.js';

const SERVICE_NAME = "Weather"

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

server.listen(weather_microservice_port, () => {
    console.log(`${SERVICE_NAME} service start succsesfuly on ${weather_microservice_port} port.`);
});