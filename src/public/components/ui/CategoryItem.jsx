import React from 'react'
import TopicItem from './TopicItem'
import css from './categoryItem.module.sass'

const CategoryItem = ({ topics, category }) => {
  return (
    <div className="container">
      <div className={css.item}>
        <h2 className="title">{category.title}</h2>
        {topics.map((topic, i) =>
          <TopicItem key={i} topic={topic} />
        )}
      </div>
    </div>
  )
}

export default CategoryItem
