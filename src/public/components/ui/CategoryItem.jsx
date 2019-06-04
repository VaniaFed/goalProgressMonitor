import React from 'react'
import TopicItem from './TopicItem'
import css from './categoryItem.module.sass'

const CategoryItem = ({ topics, category, onIncrease, onDecrease }) => {
  return (
    <div className="container">
      <div className={css.item}>
        <h2 className={css.title}>{category.title}</h2>
        {topics.map((topic, i) =>
          <TopicItem
            key={i}
            topic={topic}
            onIncrease={() => onIncrease(topic.id)}
            onDecrease={() => onDecrease(topic.id)}
          />
        )}
      </div>
    </div>
  )
}

export default CategoryItem
