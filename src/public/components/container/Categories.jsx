import React from 'react'

import CategoryItem from '../ui/CategoryItem'

const Categories = ({ topics, categories, onIncrease, onDecrease }) => {
  return (
    <div>
      {categories.map((category, i) => {
        const currentTopics = topics.filter(topic => topic.categoryId === category.id);
        return <CategoryItem
          key={i}
          topics={currentTopics}
          category={category}
          onIncrease={onIncrease}
          onDecrease={onDecrease} />
      })}
    </div>
  )
}

export default Categories
