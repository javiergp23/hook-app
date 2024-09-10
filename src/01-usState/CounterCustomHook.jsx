import {useCounter} from "../hooks/useCounter";

export const CounterCustomHook = () => {
    
    const { counter, increment, reset, decrement } = useCounter(0);
  
    return (
       <>
        <h1>Counter with Hook: { counter }</h1>
        <hr />

        <button className="btn btn-primary" onClick={() => increment(10)}>+10</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={() =>decrement(1)}>-1</button>
        
       </>
  )
}