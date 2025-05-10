import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 4040 });

wss.on("connection", (ws) => {
  ws.send("message", () => {});
});
