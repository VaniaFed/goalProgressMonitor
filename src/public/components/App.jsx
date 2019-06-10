import React, { Component } from 'react';
import { action, toJS } from 'mobx';
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
    this.state = {
      displayModalCreateCategory: false,
      displayModalCreateTopic: false,
    };

    this.toggleDisplayModalCreateCategory = this.toggleDisplayModalCreateCategory.bind(this);
    this.toggleDisplayModalCreateTopic = this.toggleDisplayModalCreateTopic.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.createTopic = this.createTopic.bind(this);
    this.increaseCurrentValue = this.increaseCurrentValue.bind(this);
    this.decreaseCurrentValue = this.decreaseCurrentValue.bind(this);
  }

  toggleDisplayModalCreateCategory() {
    const { displayModalCreateCategory } = this.state;
    this.setState({ displayModalCreateCategory: !displayModalCreateCategory });
  }

  toggleDisplayModalCreateTopic() {
    const { displayModalCreateTopic } = this.state;
    this.setState({ displayModalCreateTopic: !displayModalCreateTopic });
  }

  @action
  createCategory(categoryName) {
    const { store } = this.props;
    store.addCategory(categoryName);
  }

  @action
  createTopic(topicName, categoryId, start, finish, current = 0) {
    const { store } = this.props;
    store.addTopic(topicName, categoryId, start, finish, current);
  }

  @action
  increaseCurrentValue(topicId) {
    const { store } = this.props;
    const currentTopic = store.topics.filter(topic => topic.id === topicId)[0];
    store.changeTopic(topicId, { current: Number(currentTopic.current) + 1 });
  }

  @action
  decreaseCurrentValue(topicId) {
    const { store } = this.props;
    const currentTopic = store.topics.filter(topic => topic.id === topicId)[0];
    store.changeTopic(topicId, { current: Number(currentTopic.current) - 1 });
  }

  render() {
    const { displayModalCreateCategory, displayModalCreateTopic } = this.state;
    const {
      toggleDisplayModalCreateCategory,
      toggleDisplayModalCreateTopic,
      createCategory,
      createTopic,
      increaseCurrentValue,
      decreaseCurrentValue,
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
          <ModalCreateCategory
            onCreate={createCategory}
            onClose={toggleDisplayModalCreateCategory}
          />
        )}
        {(displayModalCreateTopic) && (
          <ModalCreateTopic
            categories={categories}
            onCreate={createTopic}
            onClose={toggleDisplayModalCreateTopic}
          />
        )}
        <Categories
          topics={topics}
          categories={categories}
          onIncrease={increaseCurrentValue}
          onDecrease={decreaseCurrentValue}
        />
      </div>
    );
  }
}

export default App;
