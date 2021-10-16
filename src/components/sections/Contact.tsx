import "../../styles/default.min.css"
import "../../styles/footer.min.css"

import iconGH from "../../res/social/github.jxl"
import iconLI from "../../res/social/linkedin.jxl"

export default function Contact() {
  return (
    <footer>
      <button>Get In Touch</button>
      <ul>
        <li style={{"marginRight": "40px"}}>Home</li>
        <li>About Me</li>
        <li>Projects</li>
      </ul>
      <div>
        <img className="btn-social" src={iconGH} alt="GitHub" />
        <h3>Noodles</h3>
        <img className="btn-social" src={iconLI} alt="LinkedIn" />
      </div>
    </footer>
  )
}
