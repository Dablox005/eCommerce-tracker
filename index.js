// Assuming `yourTLSSocket` is your TLSSocket instance causing the warning

// Import the EventEmitter module
const EventEmitter = require('events');

// Increase the maximum number of listeners for the TLSSocket instance
yourTLSSocket.setMaxListeners(15); // You can adjust the number as needed

// Verify the maximum number of listeners after setting it
console.log(yourTLSSocket.getMaxListeners()); // To confirm the updated limit

// Add your event listeners to your TLSSocket
// For example:
yourTLSSocket.on('close', () => {
  // Your close event handling logic here
});
