import React from 'react'

const Footer = () => (
    <div className="site-footer">
        <h4 className="text-center">
            Sagar Blog
        </h4>
        <p className="text-center">Follow Me</p>
        <div className="footer-social-links">
            <ul className="social-links-list">
                <li>
                    <a href="https://www.facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="facebook" 
                    >
                         <i className="fa fa-facebook-f fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="instagram" 
                    >
                         <i className="fa fa-instagram fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="twitter" 
                    >
                         <i className="fa fa-twitter fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="linkedin" 
                    >
                         <i className="fa fa-linkedin fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="github" 
                    >
                         <i className="fa fa-github fa-2x"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export default Footer

