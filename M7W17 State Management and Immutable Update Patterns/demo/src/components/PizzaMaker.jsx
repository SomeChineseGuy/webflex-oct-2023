import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  if(action.type === 'Update-Topping') {
    return {
      ...state,
      toppings: action.payload
    }
  }

  if(action.type === "Add-Topping") {
    return {
      ...state,
      toppings: "",
      selectedToppings: [...state.selectedToppings, state.toppings]
    }
  }

  if(action.type === "Increment") {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  if(action.type === "Decrement") {
    return {
      ...state,
      counter: state.counter - 1
    }
  }

  if(action.type === "Remove-Topping") {
    return {
      ...state,
      selectedToppings: action.payload
    }
  }

  return state;
}

const initialState = {
  toppings: "",
  selectedToppings: [],
  counter: 0
}

const PizzaMaker = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const updateTopping = (event) => {
    dispatch({
      type:"Update-Topping",
      payload: event.target.value
    })
  }

  const addTopping = () => {
    dispatch({
      type: "Add-Topping"
    })
  }

  const increment = () => {
    dispatch({
      type: "Increment"
    })
  }

  const decrement = () => {
    dispatch({
      type: "Decrement"
    })
  }

  const removeTopping = (idx) => {
    const newArr = state.selectedToppings.filter((singleTopping, toppingIdx) => {
      if(idx !== toppingIdx) {
        return singleTopping
      }
    })

    dispatch({
      type: 'Remove-Topping',
      payload: newArr
    })
  }

  return (
    <div>
      <h1>Pizza</h1>
      <h2>Counter: {state.counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <div>
        <label htmlFor="">Toppings: </label>
        <input type="text" value={state.toppings} onChange={updateTopping} />
        <button onClick={addTopping}>Add</button>
      </div>
      {state.selectedToppings.map((item, idx) => {
        return (
          <p onClick={() => removeTopping(idx)} key={idx}>{item}</p>
        )
      })}
    </div>
  )
};

export default PizzaMaker;