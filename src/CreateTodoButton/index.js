import React from 'react';
import './CreateTodoButton.css';

import { HiPlusCircle } from "react-icons/hi";


function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      <HiPlusCircle/>
    </button>
  );
}

export { CreateTodoButton };
