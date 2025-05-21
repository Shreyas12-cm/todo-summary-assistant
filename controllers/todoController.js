let todos = [];

const getTodos = (req, res) => {
  res.json(todos);
};

const addTodo = (req, res) =>{
  const { content } = req.body;
  const newTodo = { id: Date.now(), content, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

const deleteTodo = (req, res) => {
  const {id} = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.status(204).send();
};


module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  todos
};

