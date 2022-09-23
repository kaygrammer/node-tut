const EventEmitter = require('events')



const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id: ${id}`);
})

customEmitter.emit(`response`,'john',34)

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');