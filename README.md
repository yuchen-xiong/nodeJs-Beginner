# nodejs-beginner

<b>Class: Node.js Essential Training</b><br />
<b>IDE: Visual Studio Code</b><br />


<b>Learning Notes of Node.js</b><br />

  • Similar to Apache, every request is a single thread<br />
  • In Apache, the single thread waits for the file system to finish reading files before doing anything else<br />
  • Node.Js is single threaded, asynchronously and multitask (parallel executing, no blocking event driven IO). Events in Node.js are raised and recorded in an event queue<br />
  • Each .js file in Node.js is referred to module. It contains its own code inside module. To load another module, the "require" function is needed<br />
  • Process object: allows you to get environment information, read environment variable, and communicate with terminal or parent processes through the standard input and output. It can be used to exit the current process. e.g. process.exit();<br />
  • ` (back tip): allows to use string template, space and line break will be included.<br />
  • There are two ways to work with Node.js asychronously: event listener and timing functions<br />
  • The variables in Node.js are declared as const (read-only) to prevent other users from changing the value. <br />
  • clear or cls keyword can be used to clean terminal; ctrol + c can exit process<br />
  • In nodeJS, every javascript file is on its own module. <br />
  •  Within a javascript file, all of the variables are scoped to that module<br />
  •  Node.js allows us to separate functionality to different files and we consume that functionality with the require function. What gets returned by the require function is what we have exported with the module.exports function<br />
  • One of the most powerful part of Node.js is EventEmitter, which is pub-sub design pattern. It gives us a mechanism for emitting custom events and wiring up listeners and handler for those events<br />
  • One other important feature of the Event Emitter is Event Emitter is asychronous. These events are raised when they are happen.<br />
