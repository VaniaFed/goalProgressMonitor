import React, { Component } from 'react';
import Header from './ui/Header';
import Categories from './container/Categories';
import ModalCreateCategory from './ui/Modal/ModalCreateCategory';

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
      displayModalCreateCategory: false,
      displayModalCreateTopic: false,
      displayModalControlTopic: false,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.showModalCreateCategory = this.showModalCreateCategory.bind(this);
  }

  increase(topicId) {
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

  decrease(topicId) {
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

  showModalCreateCategory() {
    this.setState({ displayModalCreateCategory: true });
  }
  // addCategory() {
  //   console.log(this);
  // }

  render() {
    const { topics, categories, displayModalCreateCategory } = this.state;
    const {
      increase,
      decrease,
      addCategory,
      addTopic,
      showModalCreateCategory,
    } = this;
    return (
      <div>
        <Header />
        <button type="button" onClick={showModalCreateCategory} className="buttonDefault">Add category</button>
        <button type="button" onClick={addTopic} className="buttonDefault">Add topic</button>
        {(displayModalCreateCategory) && (
          <ModalCreateCategory />
        )
        }
        <Categories
          topics={topics}
          categories={categories}
          onIncrease={increase}
          onDecrease={decrease}
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
