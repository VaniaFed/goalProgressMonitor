import React, { Component } from 'react';
import Header from './ui/Header';
import Categories from './container/Categories';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [
        {
          id: 1,
          title: 'Essential grammar in Use',
          start: 0,
          finish: 209,
          current: 68,
          categoryId: 1,
        },
        {
          id: 2,
          title: 'New English File pre-intermediate',
          start: 0,
          current: 12,
          finish: 104,
          categoryId: 1,
        },
        {
          id: 3,
          title: 'Complete code',
          start: 0,
          current: 300,
          finish: 690,
          categoryId: 2,
        },
      ],
      categories: [
        {
          id: 1,
          title: 'English',
        },
        {
          id: 2,
          title: 'Software Engineering',
        },
      ],
    };

    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  onIncrease(topicId) {
    let { topics } = this.state;
    topics = topics.map((topic) => {
      if (topic.id === topicId) {
        return ({
          ...topic,
          current: topic.current + 1,
        });
      }

      return topic;
    });
    this.setState({ topics });
  }

  onDecrease(topicId) {
    let { topics } = this.state;
    topics = topics.map((topic) => {
      if (topic.id === topicId) {
        return ({
          ...topic,
          current: topic.current - 1,
        });
      }
      return topic;
    });
    this.setState({ topics });
  }

  render() {
    const { topics, categories } = this.state;
    const { onIncrease, onDecrease } = this;
    return (
      <div>
        <Header />
        <Categories
          topics={topics}
          categories={categories}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </div>
    );
  }
}

// TODO:
/*
  1. Добавить форму добавления айтемов
  2. Добавить форму изменения айтемов
  3. прикрутить Redux
  4. Прикрутить сервер
*/
