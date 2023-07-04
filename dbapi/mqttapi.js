var mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://test.mosquitto.org')

const pub = client.on('connect', function () {
    client.subscribe('presence', function (err) {
        if (!err) {
        client.publish('presence', 'Hello mqtt');
        }
    })
});

const msg = client.on('message', function (topic, message) {
    console.log(topic.toString());
    console.log(message.toString());
    client.end();
});

module.exports = { client, pub, msg }