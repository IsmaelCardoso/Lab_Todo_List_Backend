const express = require("express");

module.exports = function(server) {
  //API ROUTES
  const router = express.Router();
  server.use("/api", router);

  //API TODO
  const todoService = require("../api/todo/todoService");
  todoService.register(router, "/todos"); //serve para registrar todos os metodos cotidos em todos.js
};
