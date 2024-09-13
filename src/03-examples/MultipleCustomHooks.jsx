import { useFetch } from "../hooks"

export const MultipleCustomHooks = () => {

  const { data, isLoading, hasError } = useFetch();

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />

      {isLoading && <p>Cargando...</p>}

      <pre>{ data?.name}</pre>
    </>
  )
}

