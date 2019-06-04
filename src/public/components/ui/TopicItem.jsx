import React, { Component } from 'react'
import Control from './Control/Control'
import css from './topicItem.module.sass'

export default class TopicItem extends Component {
  shouldComponentUpdate (nextProps) {
    return this.props.topic.current !== nextProps.topic.current
  }

  componentWillUpdate () {
    console.log(this.props.topic)
  }

  render () {
    const { topic, onIncrease, onDecrease } = this.props
    return (
      <div className={css.item}>
        <h5>{topic.title}</h5>
        <Control currentValue={topic.current} onIncrease={onIncrease} onDecrease={onDecrease} />
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    )
  }
}
