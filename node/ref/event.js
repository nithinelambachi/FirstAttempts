const event = require('events');

class Event extends event {}


 const newEvent= new Event();


newEvent.on('event', ()=> {
  console.log('Somewhere, someone said hello.');});