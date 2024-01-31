import React, { useReducer } from 'react'

function UseReduceDemo() {
  const initialState = {name:"ajay", age: 24}
  function reducer(state, action){
    switch(action.type){
        case 'name':
            return {...state, "name": action.payload}
            
        case 'age':
            return {...state, "age": action.payload}
            
        default:
            return state
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <label>
            name:
            <input value={state.name} onChange={ (e)=> dispatch({type: "name", payload: e.target.value })}/>
        </label>
        <br /><br />
        <label>
            age:
            <input value={state.age} onChange={ (e)=>dispatch({type: "age", payload: e.target.value}) }/>
        </label>
        
        <h3>name is {state.name} and age is {state.age}</h3>
       
    </div>
  )
}

export default UseReduceDemo
