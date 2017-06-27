//init 
var Api = new Api();
var Ui = new Ui();
var Events = new Events(Ui, Api);
//capture events
Events.capture();
