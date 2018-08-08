class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1,2));

class TodoList {
  constructor() {
    this.todos = [];
  }

  static addTodo() {
    this.todos.push('Novo todo');
    console.log(this.todos);
  }
}

TodoList.addTodo();
TodoList.addTodo();
TodoList.addTodo();
TodoList.addTodo();
TodoList.addTodo();