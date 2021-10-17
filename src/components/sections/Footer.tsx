import { Link } from "react-scroll"

import "../../styles/default.min.css"
import "../../styles/footer.min.css"
import iconGH from "../../res/social/github.jxl"
import iconLI from "../../res/social/linkedin.jxl"

export default function Footer() {
  return (
    <footer id="contact">
      <a href="mailto:anxlus@tuta.io"><button>Get In Touch</button></a>
      <ul>
        <Link to="section-header" smooth={"easeOutQuint"}>
          <li style={{"marginRight": "25px"}}>Home</li>
        </Link>
        <Link to="about-section" smooth={"easeOutQuint"} offset={-200}>
          <li>About Me</li>
        </Link>
        <Link to="section-projects" smooth={"easeOutQuint"} offset={-150}>
          <li>Projects</li>
        </Link>
      </ul>
      <div>
        <a href="https://github.com/callmenoodles"><img className="btn-social" src={iconGH} alt="GitHub" /></a>
        <h3>Noodles</h3>
        <a href="https://www.linkedin.com/in/callmenoodles/"><img className="btn-social" src={iconLI} alt="LinkedIn" /></a>
      </div>
    </footer>
  )
}
