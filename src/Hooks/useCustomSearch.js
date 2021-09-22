import { useEffect, useState } from 'react'
import axios from 'axios'

function useCustomSearch(query,pageNumber) {

  const [Loading, setLoading] = useState(true)
  const [Error, setError] = useState(false)
  const [Items, setItems] = useState([])
  const [hasMore, sethasMore] = useState(false)

  useEffect(()=>{
    setItems([])
  },[query])
  

  useEffect(()=>{
    if(query!==''){
      setLoading(true)
      setError(false)
      let cancel
      axios({
        method:'GET',
        url:'https://api.themoviedb.org/3/search/movie?api_key=0811f7cab26d0c41f14c7646a7597b0d&language=en-US',
        params: { query: query, page: pageNumber },
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setItems(prevItems =>{
          return [...prevItems,...res.data.results.map(item => item)]
        })
        sethasMore(res.data.results.length > 0)
        setLoading(false)
        console.log(res.data.results)
      }).catch((e) => {
        if(axios.isCancel(e)) return
        setError(true)
      })
  

      return () => cancel()
    }

  },[query,pageNumber])


  return {Loading, Error, Items, hasMore}
}

export default useCustomSearch
