import React, { Component } from 'react'

import Header from './ui/Header/Header'
import CategoryItem from './ui/CategoryItem'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      topics: [
        {
          id: 1,
          title: 'Essential grammar in Use',
          start: 0,
          finish: 209,
          current: 68,
          categoryId: 1
        },
        {
          id: 2,
          title: 'New English File pre-intermediate',
          start: 0,
          current: 12,
          finish: 104,
          categoryId: 1
        }
      ],
      categories: [
        {
          id: 1,
          title: 'English'
        },
        {
          id: 2,
          title: 'Software Engineering'
        }
      ]
    }
  }
  render () {
    const { topics, categories } = this.state
    return (
      <div>
        <Header />
        {categories.map((category, i) =>
          <CategoryItem topics={topics} category={category} key={i} />
        )}
      </div>
    )
  }
}
