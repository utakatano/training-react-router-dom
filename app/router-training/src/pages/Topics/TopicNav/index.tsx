import React from 'react'
import { Link, match } from 'react-router-dom'

interface Props {
  match: match
}

export const TopicNav: React.FC<Props> = ({ match }) => {
  return (
    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/preps-v-state`}>Props v. State</Link>
      </li>
    </ul>
  )
}