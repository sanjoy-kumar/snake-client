// Stores the active TCP connection object.
let connection;
const { MOVE_UP_KEY } = require('./constants');

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
 }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
 }
  if (key === "\u0073") {
    connection.write("Move: down");
 }
  if (key === "\u0071") {
    connection.write("Move: left");
 }
  if (key === "\u0064") {
    connection.write("Move: right");
 }
  if (key === "\u0061") {
    connection.write("Say: Hello :)");
 }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => handleUserInput(key));
  return stdin;
};

module.exports = setupInput;

