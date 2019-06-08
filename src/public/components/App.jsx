import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Header from './ui/Header';
import Categories from './container/Categories';
import ModalCreateCategory from './ui/Modal/ModalCreateCategory';
import ControlButtons from './ui/ControlButtons';

@observer
class App extends Component {
  constructor(props) {
    super(props);
    const { store } = props;
    store.addCategory('English');
    store.addCategory('Software engineering');
    store.addTopic('Software engineering', store.categories[0].id, 0, 100, 50);
    this.state = {
      displayModalCreateCategory: false,
      displayModalCreateTopic: false,
      displayModalControlTopic: false,
    };

    this.showModalCreateCategory = this.showModalCreateCategory.bind(this);
  }

  showModalCreateCategory() {
    this.setState({ displayModalCreateCategory: true });
  }

  render() {
    const { displayModalCreateCategory } = this.state;
    const { showModalCreateCategory } = this;
    const { categories, topics } = this.props.store;
    return (
      <div>
        <Header />
        <ControlButtons />
        {(displayModalCreateCategory) && (
          <ModalCreateCategory />
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
