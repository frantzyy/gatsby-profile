import React from "react"

const Skill = props => {
  return (
    <table className="item-table">
      <tbody>
        <tr>
          <td className="item-name">{props.category || ""}</td>
        </tr>
        <tr>
          <td
            className="item-more-info"
            dangerouslySetInnerHTML={{ __html: props.skills || "" }}
          />
        </tr>
      </tbody>
    </table>
  )
}

export default Skill
