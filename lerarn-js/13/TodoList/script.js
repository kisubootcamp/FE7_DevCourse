const todos = [];
let id = 1;

const todo = {
  addTodo(text) {
    const newTodo = {
      id: id++,
      text,
      completed: false,
    };
    todos.push(newTodo);
    return newTodo;
  },
  deleteTodo(id) {
    const index = todos.findIndex((el) => el.id === id);
    let deletedTodo;
    if (index !== -1) {
      deletedTodo = todos.splice(index, 1);
      return todos.length === 0
        ? `남은 할 일이 없습니다.`
        : `${deletedTodo[0].text}이(가) 목록에서 제거 됐습니다.`;
    }
    return "제거할 할 일이 없습니다.";
  },
  modifyTodo(id, text) {
    const index = todos.findIndex((el) => el.id === id);
    if (index !== -1) {
      const formerText = todos[index].text;
      if (formerText === text) {
        return `할 일이 이미 "${text}"로 설정되어 있습니다.`;
      }
      todos[index].text = text;
      return `할 일이 "${formerText}"에서 "${text}"로 변경됐습니다.`;
    }
    return "변경할 할 일이 존재하지 않습니다.";
  },
  toggleTodo(id) {
    const index = todos.findIndex((el) => el.id === id);
    if (index !== -1) {
      todos[index].completed = !todos[index].completed;
      return todos[index].completed
        ? `${todos[index].text}가 완료됨으로 변경됐습니다!`
        : `${todos[index].text}가 할 일로 변경됐습니다.`;
    }
    return "변경할 할 일이 존재하지 않습니다.";
  },
  printTodoList() {
    if (todos.length === 0) return "아직 할 일 목록이 없습니다.";
    for (const todo of todos) {
      return `${todo.completed ? "✅" : "❌"}, ${todo.text}`;
    }
  },
};
