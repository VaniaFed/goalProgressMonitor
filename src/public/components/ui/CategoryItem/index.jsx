import React from 'react';
import PropTypes from 'prop-types';
import TopicItem from '../TopicItem';
import css from './categoryItem.module.sass';

const CategoryItem = ({
  topics,
  category,
  onIncrease,
  onDecrease,
}) => (
  <div className="container">
    <div className={css.item}>
      <h2 className={css.title}>{category.title}</h2>
      {topics.map(topic => (
        <TopicItem
          key={topic.id}
          topic={topic}
          onIncrease={() => onIncrease(topic.id)}
          onDecrease={() => onDecrease(topic.id)}
        />
      ))}
    </div>
  </div>
);

CategoryItem.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.object.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default CategoryItem;
