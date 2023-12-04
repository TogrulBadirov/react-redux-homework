import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToList, removeFromList, clearList } from "./averageSlice";
import uuid from "react-uuid";

export function Average() {
  const Arr = useSelector((state) => state.average.value);
  const res = useSelector((state) => state.average.averageNum);
  const dispatch = useDispatch();
  const [inpValue, setInpValue] = useState("");
  return (
    <div>
      <div>
        <h3>Average: {res}</h3>
        <input
          type="number"
          placeholder="Number"
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
        />

        <button
          onClick={() => {
            dispatch(addToList({ inpval: inpValue, id: uuid() }));
            setInpValue("");
          }}
        >
          Add
        </button>

        <button onClick={() => dispatch(clearList())}>Clear All</button>

        <ul>
          {Arr.map((item) => {
            return (
              <>
                <li>
                  {item.inpval}

                  <button
                    onClick={() => {
                      dispatch(removeFromList(item));
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
