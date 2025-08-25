// 힌트1. 무한히 증가하는 정수 id
// 힌트2. 키는 문자열
// 힌트3. 

class Todo {
    static newId = 0;
    constructor(subject) {
        this.id = Todo.newId;
        this.subject = subject;
        Todo.newId++;
    }
}

/**
 * 모든 todo에 대하여 id에서 todo 객체로의 맵
 */
let todoMap = {
};

/**
 * 주제가 subject인 todo 객체를 생성한다.
 */
export function addTodo(subject) {
    let newTodo = new Todo(subject);
    todoMap[newTodo.id] = newTodo;
    return newTodo;
}


/** 
 * ID가 id인 todo 객체를 찾아서 completed 상태를 바꾼다.
 */
export function toggleTodo(id) {
    let todo = todoMap[id];
    if (todo === undefined) {
        throw new Error("존재하지 않는 todo입니다.");
    }
    todo.completed = !todo.completed;
}


/**
 * ID가 id인 todo 객체의 주제를 subject로 변경한다.
 */
export function modifyTodo(id, subject) {
    let todo = todoMap[id];
    if (todo === undefined) {
        throw new Error("존재하지 않는 todo입니다.");
    }
    todo.subject = subject;
}


/**
 * ID가 id인 todo 객체를 삭제한다.
 */
export function deleteTodo(id) {
    let todo = todoMap[id];
    if (todo === undefined) {
        throw new Error("존재하지 않는 todo입니다.");
    };
    delete todoMap[id];
}


/**
 * 모든 todo 객체를 출력한다.
 */
export function printTodoList() {
    for (const id in todoMap) {
        let checked = todoMap[id].completed ? '[v]' : '[ ]';
        let str = `${checked} ${id} : ${todoMap[id].subject}`;
        console.log(str);
    }
}
