import { useFetch } from "../hooks"

export const MultipleCustomHooks = () => {

  useFetch();

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <pre>Pokemon Info</pre>
    </>

  )
}

