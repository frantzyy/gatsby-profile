import React from "react"

const Footer = props => {
  return (
    <div id="footer">
      <div className="row">
        <div className="column">
          <p id="cp">&copy; {props.name}</p>
          <p id="by-gatsby">
            Proudly made with{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://gatsbyjs.com"
            >
              Gatsby
            </a>
          </p>
          {props.version && (
            <p id="version">Version {props.version}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer
