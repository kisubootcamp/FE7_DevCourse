// function task3(){
//   return new Promise ((resolve) => {
//     setTimeout (() => {
//       console. log("task4");
//       resolve();
//   });
// }};

// function task4() {
//   return new Promise ((resolve) => {
//     setTimeout(() => {
//       console. log("task4");
//       resolve();
//     }, 1000);
//   });
// }
// function task5() {
// console. log ("task5");
// }

//promise, catch()
//Async-await, try-catch
async function runTasks() {
  try{
    await taski();
    await task2();
    await task3();
    await task4();
    await task5();
  } catch(e){
    console.error(e);
  } finally{
    console. log("task all finish");
  }
}
runTasks();