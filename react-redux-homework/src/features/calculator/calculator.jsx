import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addition,
  subtraction,
  multiplication,
  division,
} from "./calculatorSlice";

export function Calculator() {
  const res = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  return (
    <div>
      <div>
        <h3>Calculator</h3>

        <label htmlFor="">First Number: </label>
        <input
          type="number"
          placeholder="Enter First Number"
          onChange={(e) => setValue1(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Second Number: </label>
        <input
          type="number"
          placeholder="Enter Second Number"
          onChange={(e) => setValue2(e.target.value)}
        />
        <br />
        <br />
        <button
          onClick={() => dispatch(addition({ val1: value1, val2: value2 }))}
        >
          Addition{" "}
        </button>
        <button
          onClick={() => dispatch(subtraction({ val1: value1, val2: value2 }))}
        >
          Subtraction
        </button>
        <button
          onClick={() =>
            dispatch(multiplication({ val1: value1, val2: value2 }))
          }
        >
          Multiplication
        </button>
        <button
          onClick={() => dispatch(division({ val1: value1, val2: value2 }))}
        >
          Division
        </button>
        <br />
        <br />
        <span>Result: {res}</span>
      </div>
    </div>
  );
}
