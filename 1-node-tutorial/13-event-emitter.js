// require the class
const EventEmitter = require("events");

const customEmitter = new EventEmitter();


// the order between the listener and the subscriber matter
customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`);
});

customEmitter.on("response", () => {
  console.log(`other logic here`);
});

// subscribe to the event
customEmitter.emit("response", 'test', 25);
