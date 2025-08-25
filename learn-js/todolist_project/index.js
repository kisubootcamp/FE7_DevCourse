// index.js
const todo = (() => {
    let todoList = [];

    function getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }

    return {
        addTodo(str) {
            todoList.push({[getRandomNumber()] : str});
        },
        stringDelete() {
            todoList--;
            console.log("삭제", todoList);
        },
        getTodoList() {
            if(todoList.length <= 0) return console.log(`TODO List : 할 일 없음`);
            return console.log(`TODO List : ${JSON.stringify(todoList)}`);
        }
    };
})();

export default todo;
