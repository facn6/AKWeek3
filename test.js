var test = require("tape");
var logic = require("./logic"); // var logic refers to the object found in the file

var todos = [
  { id: 2, description: "shower", done: true },
  { id: 3, description: "homework", done: false },
  { id: 0, description: "tea", done: false }
];

var newItem = { id: 3, description: "code", done: false };

var newTodos = [
  { id: 2, description: "shower", done: true },
  { id: 3, description: "homework", done: false },
  { id: 0, description: "tea", done: false },
  { id: 1, description: "code", done: false }
];

test("addTodo", function(t) {
  var actual = logic.addTodo(todos, newItem);
  var expected = newTodos;
  t.deepEqual(actual, expected, "Should add to-do item and return array");
  t.deepEqual(actual[3].id, 1, "adds the correct id");

  var actual1 = todos;
  var expected1 = [
    { id: 2, description: "shower", done: true },
    { id: 3, description: "homework", done: false },
    { id: 0, description: "tea", done: false }
  ];
  t.deepEqual(actual1, expected1, "original array should not be mutated");
  //var actual3 = logic.addTodo(todos, newItem);
  //  var expected3 = [
  //  { id: 0, description: "shower", done: true },
  //{ id: 1, description: "homework", done: false },
  //{ id: 2, description: "tea", done: false },
  //{ id: 2, description: "code", done: false }
  //  ];

  //  t.deepEqual(
  //    actual3,
  //  expected3,
  //  "when run with same arguments it gives the same results"
  //  ); //Runs the test one more time to see whether the results stay the same
  t.end();
});

test("deleteTodo", function(t) {
  var newTodos2 = [
    { id: 2, description: "shower", done: true },
    { id: 0, description: "tea", done: false }
  ];

  var actual = logic.deleteTodo(todos, 3);
  var expected = newTodos2;
  t.deepEqual(actual, expected, "Should delete todos with specified id");
  t.deepEqual(
    todos,
    [
      { id: 2, description: "shower", done: true },
      { id: 3, description: "homework", done: false },
      { id: 0, description: "tea", done: false }
    ],
    "shouldn't change original array"
  );

  var actual3 = logic.deleteTodo(todos, 3);
  var expected3 = [
    { id: 2, description: "shower", done: true },
    { id: 0, description: "tea", done: false }
  ];

  t.deepEqual(
    actual3,
    expected3,
    "when run with same arguments it gives the same results"
  ); //Runs the test one more time to see whether the results stay the same
  t.end();
});

test("markTodo", function(t) {
  var newTodos3 = [
    { id: 2, description: "shower", done: true },
    { id: 3, description: "homework", done: true },
    { id: 0, description: "tea", done: false }
  ];

  var actual = logic.markTodo(todos, 3);
  var expected = newTodos3;
  t.deepEqual(actual, expected, "Should toggle todos 'done' with specified id");
  t.deepEqual(
    todos,
    [
      { id: 2, description: "shower", done: true },
      { id: 3, description: "homework", done: false },
      { id: 0, description: "tea", done: false }
    ],
    "shouldn't change original array"
  );

  var actual3 = logic.markTodo(todos, 3);
  var expected3 = [
    { id: 2, description: "shower", done: true },
    { id: 3, description: "homework", done: true },
    { id: 0, description: "tea", done: false }
  ];

  t.deepEqual(
    actual3,
    expected3,
    "when run with same arguments it gives the same results"
  ); //Runs the test one more time to see whether the results stay the same
  t.end();
});

var todos4 = [
  { id: 2, description: "shower", done: true },
  { id: 3, description: "homework", done: false },
  { id: 0, description: "tea", done: true },
  { id: 4, description: "code", done: false }
];

var newTodos4 = [
  { id: 2, description: "shower", done: true },
  { id: 0, description: "tea", done: true },
  { id: 3, description: "homework", done: false },
  { id: 4, description: "code", done: false }
];

test("sortTodo", function(t) {
  var actual = logic.sortTodos(todos4);
  var expected = newTodos4;
  t.deepEqual(actual, expected, "Should sort to-do items and return array");

  var actual4 = todos4;
  var expected4 = [
    { id: 2, description: "shower", done: true },
    { id: 3, description: "homework", done: false },
    { id: 0, description: "tea", done: true },
    { id: 4, description: "code", done: false }
  ];
  t.deepEqual(actual4, expected4, "Original array should not be mutated");
  t.end();
});
