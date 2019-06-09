import React from 'react';
import TopicItem from '../TopicItem';

const Topics = ({ topics, onIncrease, onDecrease }) => (
  <div>
    {topics.length
      ? topics.map(topic => (
        <TopicItem
          key={topic.id}
          topic={topic}
          onIncrease={() => onIncrease(topic.id)}
          onDecrease={() => onDecrease(topic.id)}
        />
      ))
      : <p>It&apos;s empty here. Add some topics</p>
    }
  </div>
);

export default Topics;
