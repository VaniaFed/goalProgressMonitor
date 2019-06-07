import { observable, action } from 'mobx';
import { v4 } from 'uuid';

export default class GoalManagerModel {
  @observable categories = [];

  @observable topics = [];

  get(categoryId) {
    return this.topics.map(topic => topic.id === categoryId);
  }

  @action addCategory(title) {
    this.categories.push({
      id: v4(),
      title,
    });
  }

  @action addTopic(title, categoryId, start, finish) {
    this.topics.push({
      id: v4(),
      title,
      categoryId,
      start,
      finish,
    });
  }
}
