"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ws in nodejs
const ws_1 = require("ws");
const GameManager_1 = require("./GameManager");
const wss = new ws_1.WebSocketServer({ port: 800 });
const gamemanager = new GameManager_1.GameManager();
wss.on('connection', function connection(ws) {
    gamemanager.addUser(ws);
    ws.on('disconnection', () => gamemanager.remoUser(ws));
});
