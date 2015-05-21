"use strict";
var sayHello = function sayHello(name) {
    return "Hello: " + name;
};
var result = sayHello("Sandeep"),
    message = document.createElement("H1");
message.innerText = result;
document.body.appendChild(message);
