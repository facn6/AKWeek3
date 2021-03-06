// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
    newTodo.id = todoFunctions.generateId();
    return todos.concat(newTodo);
  },
  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    return todos.filter(function(curr) {
      return curr.id != idToDelete;
    });
  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
    var arraycopy = todoFunctions.cloneArrayOfObjects(todos);
    return arraycopy.map(function(curr) {
      if (curr.id == idToMark) {
        curr.done = !curr.done;
        return curr;
      }
      else {
        return curr;
      }
    });
  },

  sortTodos: function(todos) {
    console.log("HERE1:", todos);
    var arraycopy1 = todoFunctions.cloneArrayOfObjects(todos);
    return arraycopy1.sort(function(a, b) {
      return b.done - a.done;
    });

    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  },

  unsortTodos: function(todos) {
    console.log("HERE:", todos);
    var arraycopy1 = todoFunctions.cloneArrayOfObjects(todos);
    return arraycopy1.sort(function(a, b) {
      return a.id - b.id;
    });
  },

  button: function(button, state) {
    if (button.value == "Sort") {
      newState1 = todoFunctions.sortTodos(state);
      button.value = "Unsort";
      button.textContent = "Unsort";
    } else {
      newState1 = todoFunctions.unsortTodos(state);
      button.value = "Sort";
      button.textContent = "Sort";
    }
    return newState1;
  }
};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
