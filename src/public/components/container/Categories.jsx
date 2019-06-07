import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from '../ui/CategoryItem';

const Categories = ({
  topics,
  categories,
  onIncrease,
  onDecrease,
}) => (
  <div>
    {categories.map((category) => {
      const currentTopics = topics.filter(topic => topic.categoryId === category.id);
      return (
        <CategoryItem
          key={category.id}
          topics={currentTopics}
          category={category}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      );
    })}
  </div>
);

Categories.defaultProps = {
  onIncrease: f => f,
  onDecrease: f => f,
};

Categories.propTypes = {
  topics: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
};

export default Categories;
