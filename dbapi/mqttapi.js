var mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://test.mosquitto.org');

function pub() {
    const topic = { 'test1': {qos: 0} };
    client.subscribe('presence', function (err) {
        if (!err) {
            client.publish('presence', 'Hello mqtt');
        }
    });
    client.subscribe(topic, function(err, granted) {
        if (!err) {
            client.publish('test1', 'In Test 1!');
        }
    });
    client.on('message', function(topic, message){
        console.log(topic.toString());
        console.log(message.toString());
    });
}

module.exports = { pub }