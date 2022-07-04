import React from 'react';
import './TodoItem.css';
import { VscCheckAll } from "react-icons/vsc";
import { FaTrash } from "react-icons/fa";


function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
      <VscCheckAll style={{ fontSize: '40px'}}/>
     
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
      <FaTrash style={{ fontSize: '40px'}}/>
      </span>
    </li>
  );
}

export { TodoItem };
