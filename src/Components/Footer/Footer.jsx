import React from 'react'
import './Footer.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
  return (
    <div className="footer">
      <div className="socialmedias">
        <FacebookIcon fontSize="large" className="icon"/>
        <InstagramIcon fontSize="large" className="icon"/>
        <TwitterIcon fontSize="large" className="icon"/>
        <YouTubeIcon fontSize="large" className="icon"/>
      </div>
      <div className="links">
        <h5>Audio and Subtitles</h5>
        <h5>Audio Descriptions</h5>
        <h5>Help Center</h5>
        <h5>Gift Cards</h5>
        <h5>Media Center</h5>
        <h5>Invester Relations</h5>
        <h5>Jobs</h5>
        <h5>Terms of Use</h5>
        <h5>Privacy</h5>
        <h5>Legal Notices</h5>
        <h5>Cookie Preferences</h5>
        <h5>Corporate Information</h5>
        <h5>Contact Us</h5>
      </div>
      <div className="serviceCode">
        Service code
      </div>
      <div className="copyrights">
      &#169; Netflix copyrights. inc
      </div>

    </div>
  )
}

export default Footer