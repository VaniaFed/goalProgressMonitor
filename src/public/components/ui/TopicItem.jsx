import React from 'react'
import css from './topicItem.module.sass'

const TopicItem = ({ topic }) => {
  return (
    <div className={css.item}>
      <h3>{topic.title}</h3>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  )
}

export default TopicItem
