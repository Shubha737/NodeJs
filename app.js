/*function Greeting(name){
    console.log("Good Morning "+ name+" "+"Have a nice day" );
}

Greeting("Shubham");*/

//console.log(module);

// require is used to import a module(loading a module).
var logger=require('./logger.js');
// instead of var it is better to use const as we don't want function to get overloaded or overrided at certaion position and time

logger.log('Hey! This is my first nodejs app');

console.log(logger);

console.log(__filename);// displays the file name

console.log(__dirname);// displays the directory name

// I f you want to work with a path, import path module.
const path=require('path');

var pathObj= path.parse(__filename);
console.log(pathObj);

console.log(path.parse('https://nodejs.org/dist/latest-v16.x/docs/api/path.html'));

// If you want to use OS module, import os module.

const os=require('os');

console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.version());

// Template String
//ECMAScript

var totalMemory= os.totalmem();
console.log(`Total Memory is ${totalMemory}`);

// working with file system module

const fs=require('fs');

console.log(fs.readdirSync('./'));

// import event module
// Here EvetEmitter is a class. In order to use its function, we need to create an instance of this class. 

const EventEmitter=require('events');
// creating instance(i.e. object)

const emitter= new EventEmitter();
// emit means you are making a noise. produces signal that signifies something has happened.

emitter.addListener('messageLogged',function(){
    console.log("Listener called");
});
// this function will be called when we raise that particular event.
// but one need to register the listener before raising the event.

//Raise an event

emitter.emit('messageLogged');

//Since we have not registered any listener, this doesn't affect any changes in code.




