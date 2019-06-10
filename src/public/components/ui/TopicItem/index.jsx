import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import ProgressBar from './ProgressBar';
import { calcPercent } from '../../../libs/functions';
import css from './topicItem.module.sass';

@observer
class TopicItem extends Component {
  constructor(props) {
    super(props);
    this.state = { displayControlTopic: false };

    this.showControl = this.showControl.bind(this);
    this.hideControl = this.hideControl.bind(this);
  }

  showControl() {
    this.setState({ displayControlTopic: true });
  }

  hideControl() {
    this.setState({ displayControlTopic: false });
  }

  render() {
    const { topic, onIncrease, onDecrease } = this.props;
    const currentPercent = calcPercent(topic);
    return (
      <div
        className={css.item}
        onMouseOver={this.showControl}
        onMouseLeave={this.hideControl}
      >
        <h5 className={css.title}>{topic.title}</h5>
        <ProgressBar
          current={topic.current}
          finish={topic.finish}
          currentPercent={currentPercent}
        />
        <div className={css.controlTopic}>
          <div className={`${css.controlTopic} ${!this.state.displayControlTopic && 'hidden'}`}>
            <button
              type="button"
              className={`${css.buttonControl} buttonDefault`}
              onClick={onIncrease}
            >
            +
            </button>
            <button
              type="button"
              className={`${css.buttonControl} buttonDefault`}
              onClick={onDecrease}
            >
            -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

TopicItem.propTypes = {
  topic: PropTypes.object.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default TopicItem;
