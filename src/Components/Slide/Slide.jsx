import React,{useState} from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Add from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { KeyboardArrowDown } from '@material-ui/icons';

// import { PlayCircleOutline } from '@material-ui/icons';
import { ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons';

import './Slide.scss'

function Slide({poster}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 20,
      fontWeight:700,
      padding:"10px",
    },
  }))(Tooltip);
 

  return (
    <div className="slide" 
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
    >

      <div className="box">
        <img src={poster} alt="" />
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop />
            <div className="buttons">
              <div className="left">
                <PlayArrowIcon className="icon play"/>
                <LightTooltip title="Add to My List" placement="top" arrow>
                  <Add className="icon"/>
                </LightTooltip>
                <LightTooltip title="I Like this" placement="top" arrow>
                  <ThumbUpAltOutlined className="icon"/>
                </LightTooltip>
                <LightTooltip title="Not for me" placement="top" arrow>
                  <ThumbDownOutlined className="icon"/>
                </LightTooltip>
              </div>
              <div className="right">
                <LightTooltip title="More info" placement="top" arrow>
                  <KeyboardArrowDown className="icon"/>
                </LightTooltip>
              </div>
            </div>

            <div className="details">
              <h5>97% match</h5>
              <span className="ageRating">13+</span>
              <h6>1h 20min</h6>
              <span className="videoQuality">HD</span>
            </div>
            <div className="genre">
              <span>Action</span>
              <div className="dot"/>
              <span>Comedy</span>
              <div className="dot"/>
              <span>Drama</span>
            </div>
          
          </>
        )}
        
      </div>
    </div>
    
  )
}

export default Slide
