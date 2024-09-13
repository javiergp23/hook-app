import { useEffect } from "react"
import { useState } from "react"

export const useFetch = () => {
    //creando el estado
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect (() => {
        getFetch();


    },[])
    //consumiendo la api con fetch
    const getFetch = async() => {

       const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');

       await new Promise(resolve => setTimeout(resolve, 2500));

       if( !response.ok){
          setState({
            data:null,
            isLoading: false,
            hasError: true,
            error: {
              code: response.status,
              message: response.statusText
            }
          })
          return;
       }
       const data = await response.json();
       setState({
        data:data,
        isLoading: false,
        hasError: false,
        error: null
       })
       console.log({data})
    }

  return (
    {    
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    }
  )
}
