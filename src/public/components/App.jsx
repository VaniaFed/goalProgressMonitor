import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { observer } from 'mobx-react';
import { action } from 'mobx';

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
    store.addTopic('English grammar in Use', store.categories[0].id, 0, 100, 32);
    this.increaseCurrentValue(store.topics[0].id);
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
    // store.increaseCurrentValue(topicId);
    this.props.store.topics[0].current += 1;
    console.log(store.topics);
  }

  // increaseCurrentValue(topicId) {
  //   const { store } = this.props;
  //   const currentTopic = store.topics.filter(topic => topic.id === topicId)[0];
  //   store.changeTopic(topicId, { current: Number(currentTopic.current) + 1 });
  //   console.log(store.topics);
  // }

  @action
  decreaseCurrentValue(topicId) {
    const { store } = this.props;
    const currentTopic = store.topics.filter(topic => topic.id === topicId)[0];
    this.props.store.changeTopic(topicId, { current: Number(currentTopic.current) - 1 });
    console.log(store.topics);
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
        <DevTools />
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
