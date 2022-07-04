import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TO-DO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Es hora de trabajar..."
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
      <img src="https://us.123rf.com/450wm/sabelskaya/sabelskaya1903/sabelskaya190300268/124419686-hombre-de-blogger-de-vector-sentado-con-caf%C3%A9-frente-a-la-pantalla-del-monitor-escribiendo-en-el-tecl.jpg?ver=6" alt='text'  height="220" width="360"/> 

    </form>
  );
}

export { TodoForm };
