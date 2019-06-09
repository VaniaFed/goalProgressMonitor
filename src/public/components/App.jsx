import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Header from './ui/Header';
import Categories from './container/Categories';
import ModalCreateCategory from './ui/Modal/ModalCreateCategory';
import ModalCreateTopic from './ui/Modal/ModalCreateTopic';
import ControlButtons from './ui/ControlButtons';

@observer
class App extends Component {
  constructor(props) {
    super(props);
    const { store } = props;
    store.addCategory('English');
    store.addCategory('Software engineering');
    store.addTopic('New English File Intermediate', store.categories[0].id, 0, 100, 50);
    this.state = {
      displayModalCreateCategory: false,
      displayModalCreateTopic: false,
      displayModalControlTopic: false,
    };

    this.toggleDisplayModalCreateCategory = this.toggleDisplayModalCreateCategory.bind(this);
    this.toggleDisplayModalCreateTopic = this.toggleDisplayModalCreateTopic.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.createTopic = this.createTopic.bind(this);
  }

  toggleDisplayModalCreateCategory() {
    const { displayModalCreateCategory } = this.state;
    this.setState({ displayModalCreateCategory: !displayModalCreateCategory });
  }

  toggleDisplayModalCreateTopic() {
    const { displayModalCreateTopic } = this.state;
    this.setState({ displayModalCreateTopic: !displayModalCreateTopic });
  }

  createCategory(categoryName) {
    const { store } = this.props;
    store.addCategory(categoryName);
  }

  createTopic(topicName, categoryId, start, finish, current = 0) {
    console.log(topicName);
    const { store } = this.props;
    store.addTopic(topicName, categoryId, start, finish, current);
  }

  render() {
    const { displayModalCreateCategory, displayModalCreateTopic } = this.state;
    const {
      toggleDisplayModalCreateCategory,
      toggleDisplayModalCreateTopic,
      createCategory,
      createTopic,
    } = this;
    const { categories, topics } = this.props.store;
    return (
      <div>
        <Header />
        <ControlButtons
          showModalCreateCategory={toggleDisplayModalCreateCategory}
          showModalCreateTopic={toggleDisplayModalCreateTopic}
        />
        {(displayModalCreateCategory) && (
          <ModalCreateCategory onCreate={createCategory} onClose={toggleDisplayModalCreateCategory} />
        )}
        {(displayModalCreateTopic) && (
          <ModalCreateTopic categories={categories} onCreate={createTopic} onClose={toggleDisplayModalCreateTopic} />
        )}
        <Categories
          topics={topics}
          categories={categories}
          // onIncrease={increase}
          // onDecrease={decrease}
        />
      </div>
    );
  }
}

export default App;
// TODO:
/*
  1. Добавить форму добавления айтемов
  2. Добавить форму изменения айтемов
  3. прикрутить Redux
  4. Прикрутить сервер
*/
