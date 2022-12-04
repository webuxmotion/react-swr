import useSWR from "swr"
import fetcher from "./fetcher"

function usePost (id) {
    const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/todos/${id}`, fetcher)
  
    return {
      post: data,
      isLoading: !error && !data,
      isError: error
    }
  }

  export default usePost;