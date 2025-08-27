// script.js (ES 모듈)
const todos = [];
let indexId = 1;

// 할일 추가
export function addTodo(text) {
  const newTodo = { id: indexId++, text, complete: false };
  todos.push(newTodo);
  console.log(`[추가] ID[${newTodo.id}]: '${newTodo.text}'`);
  return newTodo; //
}

// 할일 삭제
export function deleteTodo(id) {
  const idx = todos.findIndex((t) => t.id === id);
  if (idx === -1) return console.warn(`[삭제 실패] ID[${id}] 없음`);
  const [deleted] = todos.splice(idx, 1);
  console.log(`[삭제] ID[${deleted.id}]: '${deleted.text}'`);
}

// 할일 수정
export function modifyTodo(id, text) {
  const modi = todos.find((t) => t.id === id);
  if (!modi) return console.warn(`[수정 실패] ID[${id}] 없음`);
  modi.text = text;
  console.log(`[수정] ID[${modi.id}]: ${modi.text}'`);
}

// 할일 완료
export function toggleTodo(id) {
  const t = todos.find((t) => t.id === id);
  if (!t) return console.warn(`[toggle 실패] ID[${id}] 없음`);
  t.complete = true;
  console.log(`ID[${t.id}]: ${t.complete ? '완료' : '미완료'}`);
}

// 출력
export function printTodoList() {
  console.log('할일 목록');
  for (const t of todos) {
    console.log(`${t.complete ? '[X]' : '[ ]'} ID[${t.id}]: ${t.text}`);
  }
}
