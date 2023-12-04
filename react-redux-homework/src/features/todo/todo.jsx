import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, editTodo } from "./todoSlice";
import uuid from "react-uuid";

export function ToDo() {
  const todoArr = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  const [inpValue, setInpValue] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  return (
    <div>
      <div>
        <h3>Todo</h3>
        <input
          type="text"
          placeholder="text"
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
        />

        {isEdit ? (
          <button
            onClick={() => {
              setIsEdit(false);
              dispatch(editTodo({ inp: inpValue, editId: editId }));
              setInpValue("");
              setEditId(null);
            }}
          >
            save
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(addTodo({ inpval: inpValue, id: uuid() }));
              setInpValue("");
            }}
          >
            Add
          </button>
        )}

        <ul>
          {todoArr.map((item) => {
            return (
              <>
                <li>
                  {item.inpval}

                  <button
                    onClick={() => {
                      setIsEdit(true);
                      setInpValue(item.inpval);
                      setEditId(item.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removeTodo(item));
                    }}
                  >
                    x
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
