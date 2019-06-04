import React from 'react'
import css from './topicItem.module.sass'
import Control from './Control/Control';

const TopicItem = ({ topic }) => {
  return (
    <div className={css.item}>
      <h5>{topic.title}</h5>
      <Control />
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  )
}

export default TopicItem
