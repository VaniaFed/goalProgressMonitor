import React, { Component } from 'react'
import Control from './Control/Control'
import { calcPercent } from '../../libs/functions'
import css from './topicItem.module.sass'

export default class TopicItem extends Component {
  shouldComponentUpdate (nextProps) {
    return this.props.topic.current !== nextProps.topic.current
  }

  render () {
    const { topic, onIncrease, onDecrease } = this.props
    const currentPercent = calcPercent(topic)

    return (
      <div className={css.item}>
        <h5 className={css.title}>{topic.title}</h5>
        <Control currentValue={topic.current} onIncrease={onIncrease} onDecrease={onDecrease} />
        <div className={css.progressContainer}>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: currentPercent + '%' }} aria-valuenow={currentPercent} aria-valuemin="0" aria-valuemax="100"></div>
            <h5 className={css.percent}>{currentPercent}%</h5>
          </div>
        </div>
      </div>
    )
  }
}
