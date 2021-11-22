import React, { useState, useEffect, useMemo, useRef } from 'react';
import axios from "../../axios";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Slide from '../Slide';
import "./Row.scss"


function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    const items = useMemo(() => {
        return movies
            .filter(item => (isLargeRow && item.poster_path) || (!isLargeRow && item.backdrop_path))
    }, [isLargeRow, movies])

    const postersRef = useRef()

   


    return (
        <div className="row">
            <div className="title">
                <h1>{title}</h1>
                <span>
                    Explore All
                </span>
                    <KeyboardArrowRightIcon/>
                
            </div>
            <div className="control">
                <div className="posters" ref={postersRef}>

                    {
                        items.map((movie, index) => <Slide key={index} poster={`${base_url}${movie.backdrop_path}`}/>)
                    }

            </div>
           </div>
            
        </div>
    )
}

export default Row








// const moveRight = ()=>{
//     const postersContainer = postersRef.current
//     console.log(postersContainer)

//     const maxScrollWidth = postersContainer.clientWidth
//     const currentScroll = postersContainer.scrollLeft
//     const postersElements = postersContainer.querySelectorAll('.slide')
//     console.log(postersElements)


//     // collect all children with their positions
//     const allItems = Array.from(postersElements).reduce((carry, item, index) => {
        
//         if (index - 1 <= 0) {
//             carry.push([
//                 0, 
//                 item,
//                 0,
//             ])
//         } else {
//             const prevIndex = Math.max(0, index - 1)
//             const style = item.currentStyle || window.getComputedStyle(item)

//             // compute total width of element
//             const width = parseFloat(style.marginLeft) + parseFloat(style.marginRight)
//             + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth)
//             + item.offsetWidth

//             carry.push([
//                 carry[prevIndex][0] + width, 
//                 item,
//                 index,
//             ])
//         }
//         // console.log(carry)
//         return carry
//     }, [])

//     // console.log(allItems)


//     // find visible items
//     const visible = allItems.filter(([position, item]) => {
//         const range = [position, position + item.clientWidth]
//         const chunk = [currentScroll, currentScroll + maxScrollWidth]

//         return range[0] >= chunk[0] && range[1] <= chunk[1]
//     })

//     // console.log(visible)


//     // scroll to the last visible item
//     if (visible.length) {
//         const lastVisible = visible[visible.length - 1]
//         let lastVisibleIndex = lastVisible[2]
//         if (lastVisibleIndex + 1 >= allItems.length - 1) {
//             lastVisibleIndex = -1
//         }
        
//         postersContainer.scrollTo({
//             left: allItems[lastVisibleIndex + 1][0],
//             behavior: 'smooth'
//         })
//     }
// }

// const moveLeft = ()=>{
//     const postersContainer = postersRef.current
//     const maxScrollWidth = postersContainer.clientWidth
//     const currentScroll = postersContainer.scrollLeft
//     const postersElements = postersContainer.querySelectorAll('.slide')
//     // console.log(postersElements)

//     // collect all children with their positions
//     const allItems = Array.from(postersElements).reduce((carry, item, index) => {
        
//         if (index - 1 <= 0) {
//             carry.push([
//                 0, 
//                 item,
//                 0,
//             ])
//         } else {
//             const prevIndex = Math.max(0, index - 1)
//             const style = item.currentStyle || window.getComputedStyle(item)

//             // compute total width of element
//             const width = parseFloat(style.marginLeft) + parseFloat(style.marginRight)
//             + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth)
//             + item.offsetWidth

//             carry.push([
//                 carry[prevIndex][0] + width, 
//                 item,
//                 index,
//             ])
//         }
//         return carry
//     }, [])

//     // console.log(allItems)


//     // find visible items
//     const visible = allItems.filter(([position, item]) => {
//         const range = [position, position + item.clientWidth]
//         const chunk = [currentScroll, currentScroll + maxScrollWidth]

//         return range[0] >= chunk[0] && range[1] <= chunk[1]
//     })

//     // console.log(visible)


//     // scroll to the last visible item
//     if (visible.length) {
//         const lastVisible = visible[visible.length - 1]
//         let lastVisibleIndex = lastVisible[2]
//         if (lastVisibleIndex + 1 >= allItems.length - 1) {
//             lastVisibleIndex = -1
//         }
//         // console.log(allItems[lastVisibleIndex + 1][0])
//         postersContainer.scrollTo({
//             left: -allItems[lastVisibleIndex + 1][0],
//             behavior: 'smooth'
//         })
//     }
// }
