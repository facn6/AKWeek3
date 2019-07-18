// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");

  var addTodoForm = document.getElementById("add-todo");

  var state = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");
    // todoNode.id = todo.id;

    var todoSpan = document.createElement("span");
    todoSpan.innerHTML = todo["description"];
    if (todo.done) {
      todoNode.className = "marked";
    }
    todoNode.appendChild(todoSpan);

    // you will need to use addEventListener
    // console.log("kira", todo);
    // todoNode.innerHTML = todo["description"];
    // add span holding description

    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.textContent = "Delete";
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    var markButtonNode = document.createElement("button");
    markButtonNode.textContent = "Mark";

    markButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
      console.log(newState);
    });
    todoNode.appendChild(markButtonNode);

    // add markTodo button

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var desc = event.target.description.value; // event.target ....
      // console.log("hghg", desc);

      // hint: todoFunctions.addTodo(state,)
      var object = { id: 0, description: "", done: false };
      object["description"] = desc;
      // console.log(object);
      var newState = todoFunctions.addTodo(state, object);
      // console.log(newState); // ?? change this!
      update(newState);
      event.target.description.value = "";
    });
  }

  var sortButtonNode = document.createElement("button");
  sortButtonNode.id = "sorted";
  sortButtonNode.textContent = "Sort";
  sortButtonNode.addEventListener("click", function(event) {
    if (sortButtonNode.id == "sorted") {
      sortButtonNode.id = "unsorted";
      var newState1 = todoFunctions.sortTodos(state);
    } else {
      sortButtonNode.id = " sorted";
      var newState1 = todoFunctions.unsortTodos(state);
    }
    update(newState1);
    console.log("kira", newState1);
  });
  container.appendChild(sortButtonNode);

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
