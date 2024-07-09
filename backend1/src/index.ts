// ws in nodejs
import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 800 });

const gamemanager = new GameManager();
wss.on('connection', function connection(ws) {
  gamemanager.addUser(ws)
 ws.on('disconnection',()=> gamemanager.remoUser(ws))
});