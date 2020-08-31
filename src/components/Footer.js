  
import React from 'react'

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Full Stack</h4>
    <p className="text-center">Follow me</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.facebook.com/Sagar.Swapnil946/"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i className="fab fa-facebook-f fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/sagar946"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/_swapnilsagar_/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fab fa-instagram fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Swapnil-Sagar"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/swapnilsagar09/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="mailto:swapnilsagar09@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email"
          >
            <i className="fas fa-envelope-open-text fa-2x" />
          </a>
        </li>
        <p><br>
                </br>Made with <span role="img">❤️</span> by Swapnil Sagar in GatsbyJs</p>
      </ul>
    </div>
  </div>
)

export default Footer


