import './Featured.scss'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Featured({category}) {
  return (
    <div className="featured">
      {category && (
        <div className="category">
          <span>{category === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img 
        // width="100%"
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        alt="" 
      />
      <div className="info">
        <img 
          src="https://occ-0-1164-38.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432" 
          alt="" 
        />
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Amet laborum corporis est id, veritatis vel. 
          Voluptatem quo ipsa odit nulla suscipit quidem pariatur fugit, 
          facilis expedita sint libero natus totam!
        </div>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon/>
            <span>More info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
