import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from '../ui/CategoryItem';
import Section from '../ui/common/Section/Section';

const Categories = ({
  topics,
  categories,
  onIncrease,
  onDecrease,
}) => (
  <Section>
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
  </Section>
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
