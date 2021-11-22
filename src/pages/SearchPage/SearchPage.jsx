import React,{useState,useRef,useCallback,useEffect} from 'react'
import { useParams,useLocation,useHistory } from 'react-router-dom' 
import useCustomSearch from './useCustomSearch'
import Nav from '../../Components/Nav/Nav'
import './SearchPage.scss'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {

  const observer = useRef()
  const history = useHistory()
  const [Query, setQuery] = useState('')
  const [pageNumber, setpageNumber] = useState(1)
  const base_url = "https://image.tmdb.org/t/p/original"

  const query = useQuery();



useEffect(() => {

  setQuery(query.get("q"));
  setpageNumber(1)
}, [query])

const {
  Loading,
  Error,
  Items,
  hasMore
  
} = useCustomSearch(Query, pageNumber)
const LastItemref = useCallback(node=>{
  if(Loading) return
  if (observer.current) observer.current.disconnect()
  observer.current = new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting && hasMore){
      setpageNumber(prevpageNumber => prevpageNumber + 1)
    }
  })
  if (node) observer.current.observe(node)
},[Loading,hasMore])

// console.log(Items)



  
  return (
    <div style={{color:"white"}}>
      <Nav/>
      {Items.map((item,index) => {
        if(Items.length === index + 1){

          return  <div  key={item.id} className="item" ref={LastItemref} >{item.title}</div>
        }else{

         return  <div key={item.id} className="item" >{item.title}</div>
        }
      })}


      <div>{Loading && "Loading..."}</div>
      <div>{Error && "Error"}</div>
    </div>
  )
}

export default SearchPage