const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', function(err) {
    console.log('server error:\n' + err.message);
    server.close();
});

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.on('message', (msg, senderInfo) => {
    console.log(`server got: ${msg} from ${senderInfo.address}:${senderInfo.port}`);
    server.send(msg, senderInfo.port, senderInfo.address, () => {
        console.log(`server sent: ${msg} to ${senderInfo.address}:${senderInfo.port}`);
    });
});

server.bind(5400);