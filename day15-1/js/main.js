// add thêm element vào select-date
// const date = document.querySelector("#date");



// for (let index = 1; index <= 31; index++) {
//     //tạo element
//     const option = document.createElement('option');
//     option.innerText = index;

//     //chèn thêm element mới tạo đó vào vị trí nào
//     date.appendChild(option);
// }

// function addTodo (){
//     const currentTodoList = todoList.innerHTML;
//     console.log(currentTodoList);
//     const liElement = `<li class="todo">
//     <div class="todo-left">
//         <input type="checkbox" name="" id="">
//         <span>${todoInput.value}</span>
//     </div>
//     <div class="todo-right">
//         Close
//     </div>
// </li>`

//     todoList.innerHTML = currentTodoList + liElement;
// }

const addBtn = document.querySelector("#addBtn");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");

const todoListTest = [
    {
        id: 1,
        value: 'lam bai tap'
    },
    {
        id: 2,
        value: 'lam bai tap tiep'
    },
]


function buildLiElements(todo){
        // tạo 1 cái template để tái sử dụng lại đc nhiều lần
        const todoTemplate = document.querySelector("#templateLi");
        // syntax để lấy fragment bên trong template
        const todoFragment = todoTemplate.content.cloneNode(true);
        // lấy li element của template ra để chỉnh lại value title -> sau đó append thêm vào todo list
        const liElement = todoFragment.querySelector(".todo");

        //add thêm id để remove item
        //generate 1 cái id random
        // const randomId = `${Math.floor(Math.random()*1000)}`;
        //set id mới generate ra cho liElement
        liElement.setAttribute('id', todo.id);

        // lấy title của li element -> để update lại value theo value của element input
        const todoTitle = liElement.querySelector(".todo-left span");
        // update lại title của thẻ li đc tạo ra thêm bằng value của element
        todoTitle.innerText = todo.value;

        const removeBtn = liElement.querySelector(".todo-right span");
        removeBtn.addEventListener('click', function(){
            console.log(todo.id);
            // lấy liElement muốn remove theo id
            const elementToRemove = document.querySelector(`#${todo.id}`);
            const confirmText = 'Do you want to remove this item?';

            //if(confirm) chỗ này: nếu như ở confirm alert -> bấm yes thì sẽ xóa item
            //nếu k bấm yes thì sẽ k thực hiện xóa
            if (confirm(confirmText)){
                todoList.removeChild(elementToRemove);
            }
        }
            )
        // phải return về liElement mới xài cho function ở dưới đc
        return liElement;
    }


function addTodo(todo){
    // loop qua cái array todo để tạo thêm todo item
    const newTodoItem = {
        id : `${Math.floor(Math.random()*1000)}`,
        value : todoInput.value
    }
        const liElement = buildLiElements(newTodoItem);
        // add li element mới đc update value theo value của element input vào todo list
        todoList.appendChild(liElement);
}


addBtn.addEventListener('click', addTodo);

todoListTest.forEach( function(todo) {
    const liElement = buildLiElements(todo);
    // add li element mới đc update value theo value của element input vào todo list
    todoList.appendChild(liElement);
})