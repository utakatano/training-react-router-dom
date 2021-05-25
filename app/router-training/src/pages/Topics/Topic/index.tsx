import React from 'react'
import { useParams } from 'react-router'

export const Topic: React.FC = () => {
  const {topicId} = useParams<{ topicId: string }>()

  return (
    <h3>Requested topic ID: {topicId}</h3>
  )
}