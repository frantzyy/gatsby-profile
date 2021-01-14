import React from "react"
import ssa_badge from "../../static/AWS-SolArchitect-Associate-2020.png"
import cp_badge from "../../static/AWS-CloudPractitioner-2020.png"

const Badge = props => {
  let badge

  if (props.name === "ssa_badge") {
    badge = <img height="150" width="150" src={ssa_badge} />
  } else {
    badge = <img height="150" width="150" src={cp_badge} />
  }

  return badge
}

export default Badge
