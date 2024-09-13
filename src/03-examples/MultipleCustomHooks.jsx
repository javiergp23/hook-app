import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "../03-examples/LoadingMessage.jsx";

export const MultipleCustomHooks = () => {

  const { counter, decrement, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);




  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />

      {isLoading && <LoadingMessage/>}

      <pre>{ data?.name}</pre>

      <button className="btn btn-primary mt-2" onClick={()=> counter > 1 ? decrement :null ()}>Anterior</button>
      <button className="btn btn-primary mt-2" onClick={()=> increment()}>siguiente</button>
    </>
  )
}

