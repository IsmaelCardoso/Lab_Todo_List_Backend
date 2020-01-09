const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]);
Todo.updateOptions({ new: true, runValidators: true }); //para retornar o resgistro atualizado e não o antigo

module.exports = Todo;
