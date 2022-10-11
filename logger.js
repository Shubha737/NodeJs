
function log(message){
    // send an HTTP request
    console.log(message);
}


// export a module
module.exports.log=log;

// when you export as module.exports.log, you export a object while when you use module.exports=log, you export function.
// so when you create a object, we can't use the properties directly whereas when function is exported we can use it directly.