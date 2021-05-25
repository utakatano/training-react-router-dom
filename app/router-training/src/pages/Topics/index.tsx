import React from 'react'
import { useRouteMatch } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { Topic } from './Topic'
import { TopicNav } from './TopicNav'

export const Topics: React.FC = () => {
  const match = useRouteMatch()

  return (
    <div>
      <h2>Topics</h2>

      <div>
        <TopicNav match={match} />
      </div>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />          
        </Route>

        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
      
    </div>
  )
}