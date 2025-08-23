const todos = [];
let nextId = 1;

const todo = {
    addTodo(text) {
    const newTodo = {
        id: nextId++,
        text,
        completed: false,
    };
    todos.push(newTodo);
    return newTodo;
    },

    deleteTodo(id) {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
    }
    },

    modifyTodo(id, newText) {
    const todoItem = todos.find(todo => todo.id === id);
    if (todoItem) {
        todoItem.text = newText;
    }
    },

    toggleTodo(id) {
    const todoItem = todos.find(todo => todo.id === id);
    if (todoItem) {
        todoItem.completed = !todoItem.completed;
    }
    },

    printTodoList() {
    console.log("📋 현재 Todo 목록:");
    todos.forEach(todo => {
        console.log(
        `[${todo.completed ? "✅" : "❌"}] (${todo.id}) ${todo.text}`
        );
    });
    }
};

window.todo = todo;

const a = todo.addTodo("자바스크립트 공부");
const b = todo.addTodo("운동하기");
todo.printTodoList();

todo.toggleTodo(a.id);
todo.printTodoList();

todo.modifyTodo(b.id, "매일 아침 운동하기");
todo.printTodoList();

todo.deleteTodo(a.id);
todo.printTodoList();