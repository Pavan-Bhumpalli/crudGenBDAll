import { StartFunc as StartFunconMessage } from './onMessage/EntryFile.js';

let jVarLocalHostName = window.location.host;
let jVarLocalUrlForWS;

if (location.protocol === "https:") {
    jVarLocalUrlForWS = "wss://" + jVarLocalHostName;
}
if (location.protocol === "http:") {
    jVarLocalUrlForWS = "ws://" + jVarLocalHostName;
}

// let webSocket;
let StartFunc = () => {
    jFLocalEstablishWebSocket();
};

let jFLocalEstablishWebSocket = () => {
    webSocket = new WebSocket(jVarLocalUrlForWS);
    webSocket.onopen = (event) => {
        console.log("WebSocket is open now.");
        document.getElementById("OnlinePeopleId").style.color = "green";
        webSocket.send("k1");
    };

    webSocket.onmessage = StartFunconMessage;

    webSocket.onclose = function (e) {
        console.log("Socket is closed. Reconnect will be attempted in 1 second.");
        document.getElementById("OnlinePeopleId").style.color = "red";
    };
};

StartFunc();