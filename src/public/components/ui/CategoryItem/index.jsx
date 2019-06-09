import React from 'react';
import PropTypes from 'prop-types';

import Topics from './Topics';
import css from './categoryItem.module.sass';

const CategoryItem = ({
  topics,
  category,
  onIncrease,
  onDecrease,
}) => (
  <div className="container">
    <div className={css.item}>
      <h2 className="title1">{category.title}</h2>
      <Topics topics={topics} onIncrease={onIncrease} onDecrease={onDecrease} />
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
