import './TodoCreate.css';

const TodoCreate = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: 'Learn React',
    };

    props.onCreateTodo(newTodo);

    // console.log(newTodo);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoCreate;
