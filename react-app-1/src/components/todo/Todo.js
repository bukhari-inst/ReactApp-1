import './Todo.css';
import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';

const Todo = () => {
  const todos = [
    { id: 1, title: 'Eat' },
    { id: 2, title: 'Sleep' },
    { id: 3, title: 'Code' },
  ];

  return (
    <div className="App">
      <h3>Todo List</h3>
      <TodoCreate />
      <TodoList dataTodos={todos} />
    </div>
  );
};

export default Todo;
