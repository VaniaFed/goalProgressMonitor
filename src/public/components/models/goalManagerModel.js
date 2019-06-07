import { observable, computed, action } from 'mobx';
import { v4 } from 'uuid';

export default class goalManagerModel {
  @observable categories = [];

  @observable topics = [];

  @computed
  getTopicsByCategoryId(categoryId) {
    return this.topics.map(topic => topic.id === categoryId);
  }

  @action
  addCategory(title) {
    this.categories.push({
      id: v4(),
      title,
    });
  }
}
