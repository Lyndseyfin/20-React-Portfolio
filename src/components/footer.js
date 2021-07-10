import React from "react"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <div className="social-links">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={lk.png} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            Made With <icon>❤</icon> by{" "}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer