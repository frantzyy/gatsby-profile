import React from "react"

const SkillExperienceBar = props => {
  return (
    <div>
      <table className="item-table skill-table">
        <tbody>
          <tr>
            <td className="item-name">{props.name || ""}</td>
            <td className="item-when">{props.experience || ""}&nbsp;</td>
          </tr>
          <tr>
            <td className="" colSpan={2}>
              <div className="skill-meter-wrapper">
                <div
                  className="skill-meter"
                  style={{ width: props.level + "%" }}
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SkillExperienceBar
